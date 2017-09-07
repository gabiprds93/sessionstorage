function saveData()
{
    nombre = document.getElementById("nombre").value;
    password = document.getElementById("password").value;
    sessionStorage.setItem(nombre, password);
}

function recoverData()
{
    for(var i = 0; i < sessionStorage.length; i++)
    {
        var nombre = sessionStorage.key(i);
        var password = sessionStorage.getItem(nombre);
        document.getElementById("datos").innerHTML = "<div>Nombre: " + nombre + "<br/>Password: " + password + "</div>";
    }
}

function cleanData()
{
    document.getElementById("datos").innerHTML = "Limpiar vista. Los datos permanecen.";
}

function borrarTodo()
{
    sessionStorage.clear();
    recoverData();
}