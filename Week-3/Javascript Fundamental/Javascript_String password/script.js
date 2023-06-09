function isStrongPassword(password) {
    if (password.length < 8) {
        return false; // Password is too short
    }

    if (password.includes("password")) {
        return false; // Password contains "password"
    }

    if (!/[A-Z]/.test(password)) {
        return false; // Password doesn't contain an uppercase character
    }

    // All conditions passed, password is strong
    return true;
}

console.log(isStrongPassword("Qwerty")); // false - Too short
console.log(isStrongPassword("passwordQwerty")); // false - Contains "password"
console.log(isStrongPassword("qwerty123")); // false - No uppercase characters
console.log(isStrongPassword("Qwerty123")); // true
