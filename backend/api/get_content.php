<?php
require_once 'db.php';

$type = $_GET['type'] ?? 'portfolio';

if ($type === 'portfolio') {
    $stmt = $pdo->query("SELECT * FROM portfolio");
    echo json_encode($stmt->fetchAll());
} elseif ($type === 'seo') {
    $stmt = $pdo->query("SELECT * FROM seo_metadata");
    echo json_encode($stmt->fetchAll());
} else {
    echo json_encode(['error' => 'Invalid content type']);
}
?>
