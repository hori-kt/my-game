let max = 10;
let target = generateNumber();
let count = 0;

function generateNumber() {
  const level = document.querySelector('input[name="level"]:checked').value;
  if (level === "1") max = 10;
  else if (level === "2") max = 50;
  else if (level === "3") max = 100;
  document.getElementById("message").textContent = `1〜${max}の数字を当ててね！`;
  return Math.floor(Math.random() * max) + 1;
}

document.querySelectorAll('input[name="level"]').forEach(radio => {
  radio.addEventListener("change", () => {
    target = generateNumber();
    count = 0;
    document.getElementById("result").textContent = "";
  });
});

document.getElementById("guessButton").addEventListener("click", () => {
  const guess = Number(document.getElementById("guessInput").value);
  count++;

  if (guess === target) {
    document.getElementById("result").textContent = `正解！${count}回で当てました！🎉`;
  } else if (count >= 5) {
    document.getElementById("result").textContent = `ゲームオーバー！正解は ${target} でした。`;
  } else {
    document.getElementById("result").textContent =
      guess < target ? "もっと大きい数字です！" : "もっと小さい数字です！";
  }
});

