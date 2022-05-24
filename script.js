document.querySelector('form').addEventListener('submit', async info => {
    info.preventDefault()
    const data = Object.fromEntries(new FormData(info.target))
    if (!data.correo) {
        alerta.innerHTML = '<div class="alert alert-danger" role="alert">Escribe tu correo electronico <button type="button" class="btn-close position-absolute top-50 end-0 translate-middle-y" data-bs-dismiss="alert"></button></div>'
    }
    else if (!data.pass || !data.conpass) {
        alerta.innerHTML = '<div class="alert alert-danger" role="alert">Escribe ambas contraseñas <button type="button" class="btn-close position-absolute top-50 end-0 translate-middle-y" data-bs-dismiss="alert"></button></div>'
    }
    else {
        if (data.pass == data.conpass) {
            alerta.innerHTML = '<div class="alert alert-success" role="alert">¡Datos correctos! Registrando... <button type="button" class="btn-close position-absolute top-50 end-0 translate-middle-y" data-bs-dismiss="alert"></button></div>'
            const delay = ms => new Promise(res => setTimeout(res, ms));
            await delay(3000);
            window.location.reload();
        }
        else {
            alerta.innerHTML = '<div class="alert alert-danger" role="alert">Las contraseñas no coinciden <button type="button" class="btn-close position-absolute top-50 end-0 translate-middle-y" data-bs-dismiss="alert"></button></div>'
        }
    }
}
)

