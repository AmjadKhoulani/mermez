<?php
require_once 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['username']) || !isset($data['password'])) {
    echo json_encode(['error' => 'Missing data']);
    exit;
}

$username = $data['username'];
$password = $data['password'];

$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
$stmt->execute([$username]);
$user = $stmt->fetch();

if ($user && $password === $user['password']) { // In production, use password_verify with hashed passwords
    echo json_encode(['success' => true, 'user' => ['username' => $user['username'], 'role' => $user['role']]]);
} else {
    echo json_encode(['error' => 'Invalid credentials']);
}
?>
