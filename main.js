// DOM Elements
const addIncomeBtn = document.querySelector(".main__add-income");
const addExpenseBtn = document.querySelector(".main__add-expense");
const amountInput = document.querySelector(".main__input-amount");
const descriptionInput = document.querySelector(".main__input-description");
const transactionList = document.querySelector(".main__transaction-list");
const balanceDisplay = document.querySelector(".main__balance");

// Initialize balance
let balance = 0;

// Update balance display
function updateBalanceDisplay() {
  balanceDisplay.textContent = `Balance: $${balance.toFixed(2)}`;
}

// Add transaction to history
function addTransaction(amount, description, type) {
  const li = document.createElement("li");
  li.classList.add(type === "income" ? "income" : "expense");

  li.textContent = `${description}: $${amount.toFixed(2)}`;
  transactionList.appendChild(li);
}

// Handle adding money
function handleTransaction(type) {
  const amount = parseFloat(amountInput.value);
  const description = descriptionInput.value.trim();

  if (isNaN(amount) || amount <= 0 || description === "") {
    alert("Please enter a valid amount and description.");
    return;
  }

  if (type === "income") {
    balance += amount;
  } else {
    balance -= amount;
  }

  updateBalanceDisplay();
  addTransaction(amount, description, type);

  // Clear inputs
  amountInput.value = "";
  descriptionInput.value = "";
}

// Event Listeners
addIncomeBtn.addEventListener("click", () => handleTransaction("income"));
addExpenseBtn.addEventListener("click", () => handleTransaction("expense"));

// Initial balance setup
updateBalanceDisplay();
