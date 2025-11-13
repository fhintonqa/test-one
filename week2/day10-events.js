const clickBox   = document.getElementById('click-box');
const hoverBox   = document.getElementById('hover-box');
const resetBtn   = document.getElementById('reset-btn');
const simulateBtn= document.getElementById('simulate-btn');
const eventLog   = document.getElementById('event-log');
const dbclickBox = document.getElementById('dbl-click-box');
const logTextBox = document.getElementById('logBox');
const input = document.getElementById('myInput');
// const output = document.getElementById('output');

function log(message) {
    const line = document.createElement('div');
    line.textContent = message;
    eventLog.appendChild(line);
    // keep the newest message in view
    eventLog.scrollTop = eventLog.scrollHeight;
  };

  let clickCount = 0;
  clickBox.addEventListener('click', () => {
    clickCount++;
    clickBox.classList.add('clicked');
    clickBox.textContent = `Clicked ${clickCount} times!`;
    log(`Clicked the box (${clickCount})`);
  });

  dbclickBox.addEventListener('dblclick', () => {
    dbclickBox.style.backgroundColor = 'navy';
    dbclickBox.style.color = 'white';
    dbclickBox.textContent = 'This button has been double clicked already!'
    log('Double click completed');
  });

  input.addEventListener('keyup', (event) => {
    log('Key released:', event);
    log('Updated value:', input.value);
  });

//   input.addEventListener("input", () => {
//     output.textContent = input.value;
//   });

  hoverBox.addEventListener('mouseenter', () => {
    hoverBox.style.backgroundColor = '#fff3cd';
    hoverBox.textContent = 'Mouse is hovering!';
    log('Mouse entered the hover box');
  });
  
  hoverBox.addEventListener('mouseleave', () => {
    hoverBox.style.backgroundColor = '';
    hoverBox.textContent = 'Hover over me! (Practice requirement)';
    log('Mouse left the hover box');
  });
  
  resetBtn.addEventListener('click', () => {
    clickCount = 0;
    clickBox.classList.remove('clicked');
    clickBox.textContent = 'Click me! (Practice requirement)';
    hoverBox.style.backgroundColor = '';
    hoverBox.textContent = 'Hover over me! (Practice requirement)';
    dbclickBox.style.backgroundColor = '';
    dbclickBox.style.color = 'black';
    dbclickBox.textContent = 'Double click me!! (Practice requirement)';
    eventLog.innerHTML = '';
    input = '';
    log('All reset!');
  });

  simulateBtn.addEventListener('click', () => {
    log('Simulating actions...');
    clickBox.click(); // triggers the click listener
    dbclickBox.dbclick();
    const enter = new MouseEvent('mouseenter', { bubbles: true });
    const leave = new MouseEvent('mouseleave', { bubbles: true });
    hoverBox.dispatchEvent(enter);
    setTimeout(() => hoverBox.dispatchEvent(leave), 800);
  });


  
  
  