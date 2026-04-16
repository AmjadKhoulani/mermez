<?php
require_once 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['page_key'])) {
    echo json_encode(['error' => 'Missing data']);
    exit;
}

$sql = "INSERT INTO seo_metadata (page_key, title_ar, title_en, title_tr, desc_ar, desc_en, desc_tr, keywords_ar, keywords_en, keywords_tr) 
        VALUES (:page_key, :title_ar, :title_en, :title_tr, :desc_ar, :desc_en, :desc_tr, :keywords_ar, :keywords_en, :keywords_tr)
        ON DUPLICATE KEY UPDATE 
        title_ar=:title_ar, title_en=:title_en, title_tr=:title_tr, desc_ar=:desc_ar, desc_en=:desc_en, desc_tr=:desc_tr, keywords_ar=:keywords_ar, keywords_en=:keywords_en, keywords_tr=:keywords_tr";

$stmt = $pdo->prepare($sql);
try {
    $stmt->execute($data);
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
