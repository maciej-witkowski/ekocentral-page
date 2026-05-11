<?php
/**
 * EKOCENTRAL — Contact Form Email Handler
 * 
 * Place this file in the root of your home.pl hosting alongside the
 * static Next.js export. It receives form data via POST (JSON) and
 * sends an email using PHP's mail() function.
 *
 * Expected JSON body:
 *   { "name": "...", "email": "...", "phone": "...", "message": "..." }
 *
 * Returns JSON:
 *   { "success": true }  or  { "success": false, "error": "..." }
 */

// ── Configuration ──────────────────────────────────────────────────
$recipientEmail = 'biuro@ekocentral.pl';
$subjectPrefix  = '[EKOCENTRAL] Nowa wiadomość z formularza kontaktowego';

// ── CORS headers (allow same-origin and the production domain) ─────
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// ── Parse input ────────────────────────────────────────────────────
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON']);
    exit;
}

$name    = trim($input['name']    ?? '');
$email   = trim($input['email']   ?? '');
$phone   = trim($input['phone']   ?? '');
$message = trim($input['message'] ?? '');

// ── Validation ─────────────────────────────────────────────────────
$errors = [];

if (empty($name)) {
    $errors[] = 'Imię i nazwisko jest wymagane.';
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Prawidłowy adres email jest wymagany.';
}
if (empty($message)) {
    $errors[] = 'Wiadomość jest wymagana.';
}

// Simple honeypot / rate-limit: reject if message is suspiciously short
if (strlen($message) < 5) {
    $errors[] = 'Wiadomość jest zbyt krótka.';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => implode(' ', $errors)]);
    exit;
}

// ── Sanitize ───────────────────────────────────────────────────────
$name    = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$phone   = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// ── Build email ────────────────────────────────────────────────────
$subject = $subjectPrefix . ' - ' . $name;

$body = "Nowa wiadomość z formularza kontaktowego na stronie ekocentral.pl\n";
$body .= "=================================================================\n\n";
$body .= "Imię i nazwisko: {$name}\n";
$body .= "Email: {$email}\n";
$body .= "Telefon: " . ($phone ?: 'nie podano') . "\n\n";
$body .= "Wiadomość:\n";
$body .= "─────────\n";
$body .= strip_tags(html_entity_decode($message, ENT_QUOTES, 'UTF-8')) . "\n\n";
$body .= "─────────\n";
$body .= "Wysłano: " . date('Y-m-d H:i:s') . "\n";

$headers  = "From: noreply@ekocentral.pl\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: EkoCentral-ContactForm/1.0\r\n";

// ── Send ───────────────────────────────────────────────────────────
$sent = @mail($recipientEmail, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Nie udało się wysłać wiadomości. Spróbuj ponownie później.']);
}
