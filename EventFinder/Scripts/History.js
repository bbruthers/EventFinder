function CreateHistTable(plat, plong)
{
    var tablearea = document.getElementById('tablesec');
    //var table = document.createElement('table');
    var table = document.getElementById('histTable');

    if (table === null)
    {
        table = document.createElement('table');
        table.id = 'histTable';
    }

    var tablerow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');

    var la = document.createTextNode(plat);
    var ln = document.createTextNode(plong);

    td1.appendChild(la);
    td2.appendChild(ln);
    tablerow.appendChild(td1);
    tablerow.appendChild(td2);

    table.appendChild(tablerow);

    tablearea.appendChild(table);
}