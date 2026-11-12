export default function isValidPassword(pass){
    if (pass.split("").length < 7){
        return false
    }
    // Check if password contains at least one uppercase letter
    if (!/[A-Z]/.test(pass)) {
        return false;
    }

    // Check if password contains at least one lowercase letter
    if (!/[a-z]/.test(pass)) {
        return false;
    }

    // Check if password contains at least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
        return false;
    }

    return true
}