function sumar(num1, num2)
{
    if (num1 == parseFloat(num1) && num2 == parseFloat(num2))
        return parseFloat(num1) + parseFloat(num2);
    else
        return "Por favor ingrese datos numericos";
}

function restar(num1, num2)
{
    if (num1 == parseFloat(num1) && num2 == parseFloat(num2))
        return parseFloat(num1) - parseFloat(num2);
    else
        return "Por favor ingrese datos numericos";
}

function multiplicar(num1, num2)
{
    if (num1 == parseFloat(num1) && num2 == parseFloat(num2))
        return parseFloat(num1) * parseFloat(num2);
    else
        return "Por favor ingrese datos numericos";
}

function dividir(num1, num2)
{
    if (num1 == parseFloat(num1) && num2 == parseFloat(num2))
        return parseFloat(num1) / parseFloat(num2);
    else
        return "Por favor ingrese datos numericos";
}

function potencia(num1, num2)
{
    if (num1 == parseFloat(num1) && num2 == parseFloat(num2))
        return parseFloat(num1) **  parseFloat(num2);
    else
        return "Por favor ingrese datos numericos";
}

document.getElementById("sumar").addEventListener("click", function()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    if (num1 != "" && num2 != "")
        document.getElementById("resultado").innerText = sumar(num1,num2);
    else
        document.getElementById("resultado").innerText = "Por favor rellene todos los campos";
});

document.getElementById("restar").addEventListener("click", function()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (num1 != "" && num2 != "")
        document.getElementById("resultado").innerText = restar(num1,num2);
    else
        document.getElementById("resultado").innerText = "Por favor rellene todos los campos";
});

document.getElementById("multiplicar").addEventListener("click", function()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (num1 != "" && num2 != "")
        document.getElementById("resultado").innerText = multiplicar(num1,num2);
    else
        document.getElementById("resultado").innerText = "Por favor rellene todos los campos";
});

document.getElementById("dividir").addEventListener("click", function()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (num1 != "" && num2 != "")
        document.getElementById("resultado").innerText = dividir(num1,num2);
    else
        document.getElementById("resultado").innerText = "Por favor rellene todos los campos";
});

document.getElementById("potencia").addEventListener("click", function()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    if (num1 != "" && num2 != "")
        document.getElementById("resultado").innerText = potencia(num1,num2);
    else
        document.getElementById("resultado").innerText = "Por favor rellene todos los campos";
});