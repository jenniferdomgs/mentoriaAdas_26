// resolvendo em c++ para treinar para a maratona nacional

# include <iostream>

int somaVetor(int A[], int n) {
    int soma = 0;
    for (int i = 0; i < n; i++) {
        soma += A[i];
    }
    return soma;
}

int main() {
    int n;
    std::cin >> n;
    int A[n];

    for (int i = 0; i < n; i++) {
        std::cin >> A[i];
    }

    int resultado = somaVetor(A, n);
    std::cout << resultado << std::endl;
    return 0;
}