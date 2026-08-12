# include <iostream>

int main() {
    int n;
    std::cin >> n;
    int A[n];

    for (int i = 0; i < n; i++) {
        std::cin >> A[i];
    }

    int somaMax = A[0];

    for (int i = 0; i < n; i++) {
        int somaAtual = 0;

        for (int j = i; j < n; j++) {
            somaAtual += A[j];

            if (somaAtual > somaMax) {
                somaMax = somaAtual;
            }
        }
    }

    std::cout << somaMax << std::endl;

    return 0;
}