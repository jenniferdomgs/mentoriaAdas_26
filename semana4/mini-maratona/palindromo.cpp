# include <bits/stdc++.h>
using namespace std;

bool ehPalindromo(string palavra) {
    string palavraInvertida = palavra;
    reverse(palavraInvertida.begin(), palavraInvertida.end()); // tinha o metodo reverse anotado e usei por ser rapido e eficiente
    return palavraInvertida == palavra;
}

int main() {
    string p;
    std::cin >> p;
    bool resultado = ehPalindromo(p);
    if (resultado == 1) {
        std::cout << "true" << std::endl;
    } else {
        std::cout << "false" << std::endl;
    }
    return 0;
}


