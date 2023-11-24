<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'), true);

    // Simplesmente imprima os dados por enquanto (você pode ajustar para enviar e-mails)
    print(json_encode(['success' => true, 'data' => $data]));
} else {
    print(json_encode(['success' => false, 'message' => 'Método inválido']));
}
