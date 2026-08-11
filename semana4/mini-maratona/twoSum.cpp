# include <iostream>
#include <utility>


std::pair<int, int> twoSum(int A[], int n, int alvo) { // sabia que existia algo que retorna o par mas não lembrava qual/como usar então tive que pesquisar
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (A[i] + A[j] == alvo) {
                return {i, j}; 
            }
        }
    }
    return {-1, -1}; // se não tiver par que alcance o alvo
}

int main() {
    int n;
    int alvo;
    std::cin >> n >> alvo;

    int A[n];
    for (int i = 0; i < n; i++) {
        std::cin >> A[i];
    }

    std::pair<int, int> resultado = twoSum(A, n, alvo);

    if (resultado.first == -1) {
        std::cout << "Nenhum par encontrado" << std::endl;
    } else {
        std::cout << resultado.first << " " << resultado.second << std::endl;
    }
    return 0;
}