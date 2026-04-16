<?php
require_once 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['id'])) {
    echo json_encode(['error' => 'Missing data']);
    exit;
}

$sql = "INSERT INTO portfolio (id, year, category, image, title_ar, title_en, title_tr, story_ar, story_en, story_tr, challenge_ar, challenge_en, challenge_tr, solution_ar, solution_en, solution_tr, result_ar, result_en, result_tr) 
        VALUES (:id, :year, :category, :image, :title_ar, :title_en, :title_tr, :story_ar, :story_en, :story_tr, :challenge_ar, :challenge_en, :challenge_tr, :solution_ar, :solution_en, :solution_tr, :result_ar, :result_en, :result_tr)
        ON DUPLICATE KEY UPDATE 
        year=:year, category=:category, image=:image, title_ar=:title_ar, title_en=:title_en, title_tr=:title_tr, story_ar=:story_ar, story_en=:story_en, story_tr=:story_tr, challenge_ar=:challenge_ar, challenge_en=:challenge_en, challenge_tr=:challenge_tr, solution_ar=:solution_ar, solution_en=:solution_en, solution_tr=:solution_tr, result_ar=:result_ar, result_en=:result_en, result_tr=:result_tr";

$stmt = $pdo->prepare($sql);
try {
    $stmt->execute($data);
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
