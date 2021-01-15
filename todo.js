todoMain();

function todoMain() {
  const DEFAULT_OPTION = "Choose category";

  let todoList = [],
    calendar,
    inputTodo,
    inputCate,
    listCate,
    inputDate,
    inputTime,
    btnAdd,
    btnSort,
    checkSort,
    tableTodo,
    selectFilterCate,
    btnChange,
    currentPage = 1,
    totalPages = 0,
    itemsPerPage = Number.parseInt(localStorage.getItem("todo-itemsPerPage")) || 5,
    selectItemsPerPage;

  getElements();
  addListeners();
  initCalendar();
  load();
  renderRows(todoList);
  updateSelectOptions();

  function getElements() {
    inputTodo = document.getElementById("inputTodo");
    inputCate = document.getElementById("inputCate");
    listCate = document.getElementById("listCate");
    inputDate = document.getElementById("inputDate");
    inputTime = document.getElementById("inputTime");
    btnAdd = document.getElementById("btnAdd");
    btnSort = document.getElementById("btnSort");
    selectFilterCate = document.getElementById("selectFilterCate");
    checkSort = document.getElementById("checkSort");
    btnChange = document.getElementById("btnChange");
    tableTodo = document.getElementById("tableTodo");
    selectItemsPerPage = document.getElementById("selectItemsPerPage");
  }

  function addListeners() {
    btnAdd.addEventListener("click", addTodo, false);
    btnSort.addEventListener("click", sortEntry, false);
    selectFilterCate.addEventListener("change", multipleFilter, false);
    checkSort.addEventListener("change", multipleFilter, false);
    document.getElementById("todo-modal-close-btn").addEventListener("click", closeEditModalBox, false);
    btnChange.addEventListener("click", commitEdit, false);
    document.addEventListener("click", onDocumentClick, false);
    selectItemsPerPage.addEventListener("change", selectedItemsPerPage, false);
  }

  function addTodo(event) {
    let inputTodoValue = inputTodo.value;
    inputTodo.value = "";

    let inputCateValue = inputCate.value;
    inputCate.value = "";

    let inputDateValue = inputDate.value;
    var date_date = new Date(inputDateValue);
    inputDateValue = date_date.getFullYear() + "-" + ((date_date.getMonth() + 1) < 10 ? '0' : '') + (date_date.getMonth() + 1) + "-" + (date_date.getDate() < 10 ? '0' : '') + date_date.getDate();
    inputDate.value = "";

    let inputTimeValue = inputTime.value;
    inputTime.value = "";

    console.log(typeof(inputTimeValue));
    console.log(typeof(false));
    let obj = {
      id: _uuid(),
      todo: inputTodoValue,
      category: inputCateValue,
      date: inputDateValue,
      time: inputTimeValue,
      done: false,
    };

    renderRow(obj);
    todoList.push(obj);
    save();
    updateSelectOptions();
  }

  function updateSelectOptions() {
    let options = [];

    todoList.forEach((obj) => {
      options.push(obj.category);
    });

    let optionsSet = new Set(options);

    selectFilterCate.innerHTML = "";
    listCate.innerHTML = "";

    let newOptionElem = document.createElement('option');
    newOptionElem.value = DEFAULT_OPTION;
    newOptionElem.innerText = DEFAULT_OPTION;
    selectFilterCate.appendChild(newOptionElem);

    for (let option of optionsSet) {
      let newOptionElem = document.createElement('option');
      newOptionElem.value = option;
      newOptionElem.innerText = option;
      selectFilterCate.appendChild(newOptionElem);
    }
    for (let option of optionsSet) {
      let newOptionElem = document.createElement('option');
      newOptionElem.value = option;
      newOptionElem.innerText = option;
      listCate.appendChild(newOptionElem);
    }
  }

  function save() {
    let stringified = JSON.stringify(todoList);
    localStorage.setItem("todoList", stringified);
  }

  function load() {
    let retrieved = localStorage.getItem("todoList");
    todoList = JSON.parse(retrieved);
    if (todoList == null)
      todoList = [];

    selectItemsPerPage.value = itemsPerPage;
  }

  function renderRows(arr) {
    renderPageNumbers(arr);
    currentPage = currentPage > totalPages ? totalPages : currentPage;

    arr.forEach(({ id, todo, date, time }) => {
      addEvent({
        id: id,
        title: todo,
        start: `${date}T${time}`,
      });
    })

    let slicedArr = arr.slice(itemsPerPage * (currentPage - 1), itemsPerPage * currentPage);
    slicedArr.forEach(todoObj => {
      renderRow(todoObj);
    })
  }

  function renderRow({ todo: inputTodoValue, category: inputCateValue, id, date, time, done }) {
    // add a new row
    let table = document.getElementById("tableTodo");

    let trElem = document.createElement("tr");
    table.appendChild(trElem);
    trElem.draggable = "true";
    trElem.dataset.id = id;

    // checkbox cell
    let checkboxElem = document.createElement("input");
    checkboxElem.type = "checkbox";
    checkboxElem.addEventListener("click", checkboxClickCallback, false);
    checkboxElem.dataset.id = id;
    let tdElem1 = document.createElement("td");
    tdElem1.appendChild(checkboxElem);
    trElem.appendChild(tdElem1);

    // date cell
    let dateElem = document.createElement("td");

    dateElem.innerText = formatDate(date);
    trElem.appendChild(dateElem);

    // time cell
    let timeElem = document.createElement("td");
    timeElem.innerText = time;
    trElem.appendChild(timeElem);

    // to-do cell
    let tdElem2 = document.createElement("td");
    tdElem2.innerText = inputTodoValue;
    trElem.appendChild(tdElem2);

    // category cell
    let tdElem3 = document.createElement("td");
    tdElem3.innerText = inputCateValue;
    tdElem3.className = "categoryCell";
    trElem.appendChild(tdElem3);

    // edit cell
    let editSpan = document.createElement("span");
    editSpan.innerText = "edit";
    editSpan.className = "material-icons";
    editSpan.addEventListener("click", toEditItem, false);
    editSpan.dataset.id = id;
    let editTd = document.createElement("td");
    editTd.appendChild(editSpan);
    trElem.appendChild(editTd);

    // delete cell
    let spanElem = document.createElement("span");
    spanElem.innerText = "delete";
    spanElem.className = "material-icons";
    spanElem.addEventListener("click", deleteItem, false);
    spanElem.dataset.id = id;
    let tdElem4 = document.createElement("td");
    tdElem4.appendChild(spanElem);
    trElem.appendChild(tdElem4);

    // done button
    checkboxElem.type = "checkbox";
    checkboxElem.checked = done;
    if (done) {
      trElem.classList.add("strike");
    } else {
      trElem.classList.remove("strike");
    }

    dateElem.dataset.type = "date";
    timeElem.dataset.type = "time";
    tdElem2.dataset.type = "todo";
    tdElem3.dataset.type = "category";

    dateElem.dataset.id = id;
    timeElem.dataset.id = id;
    tdElem2.dataset.id = id;
    tdElem3.dataset.id = id;

    function deleteItem() {
      trElem.remove();
      updateSelectOptions();

      for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id == this.dataset.id)
          todoList.splice(i, 1);
      }
      save();

      // remove from calendar
      calendar.getEventById(this.dataset.id).remove();
    }

    function checkboxClickCallback() {
      trElem.classList.toggle("strike");
      for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id == this.dataset.id)
          todoList[i]["done"] = this.checked;
      }
      save();
    }
  }

  function _uuid() {
    var d = Date.now();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  function sortEntry() {
    todoList.sort((a, b) => {
      let aDate = Date.parse(a.date);
      let bDate = Date.parse(b.date);
      return bDate - aDate;
    });

    save();

    clearTable();

    renderRows(todoList);
  }

  function initCalendar() {
    var calendarEl = document.getElementById('calendar');

    calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: new Date(),
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [],
      eventClick: function (info) {
        toEditItem(info.event);
      },
      eventBackgroundColor: "#acd6f5",
      editable: true,
      eventDrop: function (info) {
        calendarEventDragged(info.event);
      },
      eventTimeFormat: {
        hour: 'numeric',
        minute: '2-digit',
        omitZeroMinute: false,
        hour12: false
      }
    });

    calendar.render();
  }

  function addEvent(event) {
    calendar.addEvent(event);
  }

  function clearTable() {
    // Empty the table, keeping the first row
    let trElems = document.getElementsByTagName("tr");
    for (let i = trElems.length - 1; i > 0; i--) {
      if (!trElems[i].id)
        trElems[i].remove();
    }

    calendar.getEvents().forEach(event => event.remove());
  }

  function multipleFilter() {
    clearTable();

    let selection = selectFilterCate.value;

    if (selection == DEFAULT_OPTION) {

      if (checkSort.checked) {
        let resultArray = [];

        let filteredIncompleteArray = todoList.filter(obj => obj.done == false);

        let filteredDoneArray = todoList.filter(obj => obj.done == true);

        resultArray = [...filteredIncompleteArray, ...filteredDoneArray];
        renderRows(resultArray);
      } else {
        renderRows(todoList);
      }

    } else {

      let filteredCategoryArray = todoList.filter(obj => obj.category == selection);

      if (checkSort.checked) {
        let resultArray = [];

        let filteredIncompleteArray = filteredCategoryArray.filter(obj => obj.done == false);

        let filteredDoneArray = filteredCategoryArray.filter(obj => obj.done == true);

        resultArray = [...filteredIncompleteArray, ...filteredDoneArray];
        renderRows(resultArray);
      } else {
        renderRows(filteredCategoryArray);
      }
    }
  }

  function formatDate(date) {
    let dateObj = new Date(date);
    let formattedDate = dateObj.toLocaleString("en-GB", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  }

  function showEditModalBox(event) {
    document.getElementById("todo-overlay").classList.add("slidedIntoView");
  }

  function closeEditModalBox(event) {
    document.getElementById("todo-overlay").classList.remove("slidedIntoView");
  }

  function commitEdit(event) {
    closeEditModalBox();

    let id = event.target.dataset.id;
    let todo = document.getElementById("todo-edit-todo").value;
    let category = document.getElementById("todo-edit-category").value;
    let date_date = new Date(document.getElementById("todo-edit-date").value);
    let date = date_date.getFullYear() + "-" + ((date_date.getMonth() + 1) < 10 ? '0' : '') + (date_date.getMonth() + 1) + "-" + (date_date.getDate() < 10 ? '0' : '') + date_date.getDate();
    let time = document.getElementById("todo-edit-time").value;

    // remove from calendar
    calendar.getEventById(id).remove();

    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].id == id) {
        todoList[i] = {
          id: id,
          todo: todo,
          category: category,
          date: date,
          time: time,
          done: todoList[i].done,
        };

        addEvent({
          id: id,
          title: todoList[i].todo,
          start: todoList[i].date,
        });
        console.log(todoList[i].todo);
      }
    }

    save();

    // Update the table
    let tdNodeList = tableTodo.querySelectorAll(`td[data-id='${id}']`);
    for (let i = 0; i < tdNodeList.length; i++) {
      let type = tdNodeList[i].dataset.type;
      switch (type) {
        case "date":
          tdNodeList[i].innerText = formatDate(date);
          break;
        case "time":
          tdNodeList[i].innerText = time;
          break;
        case "todo":
          tdNodeList[i].innerText = todo;
          break;
        case "category":
          tdNodeList[i].innerText = category;
          break;
      }
    }
  }

  function toEditItem(event) {
    showEditModalBox();

    let id;

    if (event.target) // mouse event
      id = event.target.dataset.id;
    else // calendar event
      id = event.id;

    preFillEditForm(id);
  }

  function preFillEditForm(id) {
    let result = todoList.find(todoObj => todoObj.id == id);
    let { todo, category, date, time } = result;

    document.getElementById("todo-edit-todo").value = todo;
    document.getElementById("todo-edit-category").value = category;
    let date_date = new Date(date);
    document.getElementById("todo-edit-date").value = ((date_date.getMonth() + 1) < 10 ? '0' : '') + (date_date.getMonth() + 1) + "/" + (date_date.getDate() < 10 ? '0' : '') + date_date.getDate() + "/" + date_date.getFullYear();
    document.getElementById("todo-edit-time").value = time;

    btnChange.dataset.id = id;
  }

  function calendarEventDragged(event) {
    let id = event.id;
    let dateObj = new Date(event.start);
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;
    let date = dateObj.getDate();

    let paddedMonth = month.toString();
    if (paddedMonth.length < 2) {
      paddedMonth = "0" + paddedMonth;
    }

    let paddedDate = date.toString();
    if (paddedDate.length < 2) {
      paddedDate = "0" + paddedDate;
    }

    let toStoreDate = `${year}-${paddedMonth}-${paddedDate}`;

    todoList.forEach(todoObj => {
      if (todoObj.id == id) {
        todoObj.date = toStoreDate;
      }
    });

    save();

    multipleFilter();

  }

  function onDocumentClick(event) {
    switch (event.target.dataset.pagination) {
      case "pageNumber":
        currentPage = Number(event.target.innerText);
        break;
      case "previousPage":
        currentPage = currentPage == 1 ? currentPage : currentPage - 1;
        break;
      case "nextPage":
        currentPage = currentPage == totalPages ? currentPage : currentPage + 1;
        break;
      case "firstPage":
        currentPage = 1;
        break;
      case "lastPage":
        currentPage = totalPages;
        break;
      default:
        break;
    }
    multipleFilter();
  }

  function renderPageNumbers(arr) {
    let numberOfItems = arr.length;
    totalPages = Math.ceil(numberOfItems / itemsPerPage);

    let pageNumberDiv = document.querySelector(".pagination-pages");

    pageNumberDiv.innerHTML = `<span class="material-icons chevron" data-pagination="firstPage">first_page</span>`;

    if (currentPage != 1)
      pageNumberDiv.innerHTML += `<span class="material-icons chevron" data-pagination="previousPage">chevron_left</span>`;

    if (totalPages > 0) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumberDiv.innerHTML += `<span data-pagination="pageNumber">${i}</span>`;
      }
    }

    if (currentPage != totalPages)
      pageNumberDiv.innerHTML += `<span class="material-icons chevron" data-pagination="nextPage">chevron_right</span>`;

    pageNumberDiv.innerHTML += `<span class="material-icons chevron" data-pagination="lastPage">last_page</span>`;
  }

  function selectedItemsPerPage(event) {
    itemsPerPage = Number(event.target.value);
    localStorage.setItem("todo-itemsPerPage", itemsPerPage);
    multipleFilter();
  }
}