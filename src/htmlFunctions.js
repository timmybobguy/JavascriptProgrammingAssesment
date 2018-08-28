function makeNewLine() {
	var br = document.createElement('br')
	document.body.appendChild(br)
	br = document.createElement('br')
	document.body.appendChild(br)
}

function makeTable (appendTo) {
  var newTable
  newTable = document.createElement('table')
  newTable.setAttribute('border', '1')
  appendTo.appendChild(newTable)
  return newTable
}

function addTableHeaders (theTable, ...allHeaders) {
  var newTableRow = document.createElement('tr')
  var newTableHeader
  for (let aHeader of allHeaders) {
    newTableHeader = document.createElement('th')
    newTableHeader.innerHTML = aHeader
    newTableRow.appendChild(newTableHeader)
  }
    theTable.appendChild(newTableRow)
}


function addTableData (theTable, ...allData) {
  var newTableRow = document.createElement('tr')
  var newTableData
  for (let data of allData) {
    newTableData = document.createElement('td')
    newTableData.innerHTML = data
    newTableRow.appendChild(newTableData)
  }
    theTable.appendChild(newTableRow)
}

function makeSelect(appendTo, id) {
  var newSelect
  newSelect = document.createElement('select')
  appendTo.appendChild(newSelect)
  newSelect.setAttribute("id", id)
  return newSelect
}

function addSelectOption(theSelect, ...allData) {
  for (let data of allData) {
    var newSelectData = document.createElement('option')
    newSelectData.innerHTML = data
    newSelectData.value = data
  }
  theSelect.appendChild(newSelectData)
}
function makeButton(appendTo, buttonText, buttonCommand) {
  var newButton
  newButton = document.createElement('button')
  appendTo.appendChild(newButton)
  newButton.setAttribute("onclick", buttonCommand)
  newButton.innerHTML = buttonText
  return newButton
}