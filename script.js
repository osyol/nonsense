const mainContent = document.getElementById('mainContent');

document.getElementById('homeLink').addEventListener('click', showHome);
document.getElementById('groupsLink').addEventListener('click', showGroups);
document.getElementById('messagesLink').addEventListener('click', showMessages);
document.getElementById('accountLink').addEventListener('click', showAccount);
document.getElementById('newPostLink').addEventListener('click', showNewPost);

function showHome() {
  mainContent.innerHTML = `
    <h1>Recommended</h1>
    <div class="post">
      <h2>How to write compelling characters</h2>
      <p>Tips and techniques for bringing your characters to life...</p>
      <button onclick="comment()">Comment</button>
      <button onclick="share()">Share</button>
    </div>
    <div class="post">
      <h2>The art of worldbuilding</h2>
      <p>Create immersive worlds for your stories...</p>
      <button onclick="comment()">Comment</button>
      <button onclick="share()">Share</button>
    </div>
  `;
  bindDynamicEvents(); 
}

function showGroups() {
  mainContent.innerHTML = `
    <h1>Groups</h1>
    <button id="toggleGroups">Show Groups</button>
    <div id="groupList" style="display:none;">
      <div class="post" onclick="banUser()">
        <h2>Fantasy Writers</h2>
        <p>A place for fans and creators of fantasy stories.</p>
      </div>
      <div class="post" onclick="banUser()">
        <h2>Short Story Creators</h2>
        <p>Discuss short story ideas and get feedback.</p>
      </div>
      <div class="post" onclick="banUser()">
        <h2>Poetry Lovers</h2>
        <p>A place to discuss and create beautiful poetry.</p>
      </div>
    </div>
  `;
  bindDynamicEvents(); 
}

function showMessages() {
  mainContent.innerHTML = `
    <h1>Messages</h1>
    <p>You have no new messages.</p>
  `;
}

function showAccount() {
  mainContent.innerHTML = `
    <h1>My Account</h1>
    <p>Profile settings will be available here soon.</p>
  `;
}

function showNewPost() {
  mainContent.innerHTML = `
    <h1>New Post</h1>
    <input type="text" placeholder="Title">
    <textarea placeholder="Write your story..."></textarea>
    <button onclick="submitPost()">Submit</button>
  `;
}

function comment() {
  alert('Comment feature coming soon!');
}

function share() {
  alert('Share feature coming soon!');
}

function submitPost() {
  alert('Post submitted!');
}

function banUser() {
  alert("You were banned from this group permanently.");
}

function bindDynamicEvents() {
  // Показать/скрыть группы при нажатии
  $("#toggleGroups").off('click').on('click', function() {
    $("#groupList").slideToggle();
    let btnText = $(this).text() === "Show Groups" ? "Hide Groups" : "Show Groups";
    $(this).text(btnText); // Меняем текст кнопки
  });

  // Наведение на пост
  $(".post").hover(
    function() {
      $(this).css("transform", "scale(1.02)");
    },
    function() {
      $(this).css("transform", "scale(1)");
    }
  );
}

// Инициализация модального окна
$(document).ready(function() {
  $("#openModal").click(function() {
    $("#modal").fadeIn();
  });

  $("#closeModal").click(function() {
    $("#modal").fadeOut();
  });

  // При загрузке страницы сразу отображаем главную страницу
  showHome();
});
