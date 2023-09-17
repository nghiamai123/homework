let id = 0;

function sell() {
  id++;
  let pro = form.pro.value;
  let qua = form.qua.value;
  let uni = form.uni.value;
  let dis = form.dis.value;
  let sub = qua * uni * (1 - dis / 100);
  
  let row = "<tr>";
  row += "<td>" + id + "</td>";
  row += "<td>" + pro + "</td>";
  row += "<td>" + qua + "</td>";
  row += "<td>$" + uni + "</td>";
  row += "<td>" + dis + "</td>";
  row += "<td>$" + sub + "</td>";
  row += "</tr>";
  
  let tbody = document.getElementById("tab1").getElementsByTagName("tbody")[0];
  tbody.insertAdjacentHTML("beforeend", row);
}