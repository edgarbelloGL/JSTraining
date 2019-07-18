var dom = document;
var names = ["Ed", "Andres", "Maria", "Sergio", "Dany"];
console.log(names);
document.getElementById("fixNameSection").style.display = "none";

//--------------------------------------- CREATE ---------------------------------------
function addNewName() {
    let newName = dom.getElementById("nameInput").value;
    names.push(newName);
    console.log(names);
    dom.getElementById("actionResult").innerHTML = "Add New Name Success: " + newName;
};

//--------------------------------------- Read ---------------------------------------

function showNames() {
    var ul = dom.getElementById("nameList");
    ul.innerHTML = "";
    names.forEach(function(name) {
        var li = dom.createElement('li');
        ul.appendChild(li);

        li.innerHTML += name;
    });
}

//--------------------------------------- Update ---------------------------------------

function updateName() {
    document.getElementById("fixNameSection").style.display = "";
};

function fixName() {
    let editName = dom.getElementById("nameInput").value;
    let fixedName = dom.getElementById("fixNameInput").value;
    if (updateNameArray(editName, fixedName)) {
        dom.getElementById("actionResult").innerHTML = "Fix Name Success: " + editName + " -> " + fixedName;
    } else {
        dom.getElementById("actionResult").innerHTML = "Name Not Found";
    }
    document.getElementById("fixNameSection").style.display = "none";
};

function updateNameArray(editName, fixedName) {
    var changed = false;
    for (i = 0; i < names.length; i++) {
        if (names[i] === editName) {
            names[i] = fixedName;
            changed = true;
        }
    }
    console.log(names);
    return changed;
}

//--------------------------------------- Remove ---------------------------------------

function removeName() {
    let removeName = dom.getElementById("nameInput").value;
    if (removeNameArray(removeName)) {
        dom.getElementById("actionResult").innerHTML = "Remove Name Success: " + removeName + " Removed";
    } else {
        dom.getElementById("actionResult").innerHTML = "Remove Name Not Found";
    }
};

function removeNameArray(removeName) {
    var removed = false;
    for (i = 0; i < names.length; i++) {
        if (names[i] === removeName) {
            names.splice(i, 1);
            removed = true;
        }
    }
    console.log(names);
    return removed;
}

function clearNames() {
    var ul = dom.getElementById("nameList");
    ul.innerHTML = "";
    dom.getElementById("actionResult").innerHTML = "Clear All Names Success!";
};

//--------------------------------------- EOF ---------------------------------------