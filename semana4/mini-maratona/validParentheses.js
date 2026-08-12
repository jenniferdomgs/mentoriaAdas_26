function validParentheses(par) {
    const stack = [];
    const pares = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (const p of par) {
        if (p === '(' || p === '[' || p === '{') {
            stack.push(p);
        } else if (p === ')' || p === ']' || p === '}') { // se vem pro else ent verifica se o último é o par do atual
            if (stack.pop() !== pares[p]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}


console.log(validParentheses("()[]{}"));
console.log(validParentheses("([)])"));
console.log(validParentheses("()[]"));
console.log(validParentheses("[]{}()[]{}"));