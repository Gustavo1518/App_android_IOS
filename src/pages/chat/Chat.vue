<template>
  <f7-page name="Chat">
    <f7-navbar title="Chat" back-link="Back"></f7-navbar>
    <f7-block-title>Chat</f7-block-title>
      <div class="page">
  <div class="navbar">
    <div class="navbar-bg"></div>
    <div class="navbar-inner">
      <div class="title"></div>
    </div>
  </div>
  <div class="toolbar messagebar">
    <div class="toolbar-inner">
      <div class="messagebar-area">
        <textarea class="resizable" placeholder="Message"></textarea>
      </div><a class="link send-link" href="#">Send</a>
    </div>
  </div>
  <div class="page-content messages-content">
    <div class="messages">
      <!-- Messages title -->
      <div class="messages-title"><b>Sunday, Feb 9,</b> 12:58</div>
      <!-- Full layout sent message -->
      <div class="message message-sent">
        <div class="message-avatar" style="background-image:url(https://cdn.framework7.io/placeholder/people-100x100-7.jpg);"></div>
        <div class="message-content">
          <div class="message-name">John Doe</div>
          <div class="message-header">Message header</div>
          <div class="message-bubble">
            <div class="message-text-header">Text header</div>
            <div class="message-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            <div class="message-text-footer">Text footer</div>
          </div>
          <div class="message-footer">Message footer</div>
        </div>
      </div>
      <!-- Full layout received message -->
      <div class="message message-received">
        <div class="message-avatar" style="background-image:url(https://cdn.framework7.io/placeholder/people-100x100-7.jpg);"></div>
        <div class="message-content">
          <div class="message-name">John Doe</div>
          <div class="message-header">Message header</div>
          <div class="message-bubble">
            <div class="message-text-header">Text header</div>
            <div class="message-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
            <div class="message-text-footer">Text footer</div>
          </div>
          <div class="message-footer">Message footer</div>
        </div>
      </div>
      <!-- Messages -->
      <div class="message message-sent">
        <div class="message-content">
          <div class="message-bubble">
            <div class="message-text">Hi, Kate</div>
          </div>
        </div>
      </div>
      <div class="message message-sent">
        <div class="message-content">
          <div class="message-bubble">
            <div class="message-text">How are you?</div>
          </div>
        </div>
      </div>
      <div class="message message-received">
        <div class="message-avatar" style="background-image:url(https://cdn.framework7.io/placeholder/people-100x100-9.jpg);"></div>
        <div class="message-content">
          <div class="message-name">Kate</div>
          <div class="message-bubble">
            <div class="message-text">Hi, I am good!</div>
          </div>
        </div>
      </div>
      <div class="message message-received">
        <div class="message-avatar" style="background-image:url(https://cdn.framework7.io/placeholder/people-100x100-7.jpg);"></div>
        <div class="message-content">
          <div class="message-name">Blue Ninja</div>
          <div class="message-bubble">
            <div class="message-text">Hi there, I am also fine, thanks! And how are you?</div>
          </div>
        </div>
      </div>
      <div class="message message-sent">
        <div class="message-content">
          <div class="message-bubble">
            <div class="message-text">Hey, Blue Ninja! Glad to see you ;)</div>
          </div>
        </div>
      </div>
      <div class="message message-sent">
        <div class="message-content">
          <div class="message-bubble">
            <div class="message-text">Hey, look, cutest kitten ever!</div>
          </div>
        </div>
      </div>
      <div class="message message-sent">
        <div class="message-content">
          <div class="message-bubble">
            <div class="message-image"><img src="https://cdn.framework7.io/placeholder/cats-200x260-4.jpg" style="width:200px; height: 260px;"></div>
          </div>
        </div>
      </div>
      <div class="message message-received">
        <div class="message-avatar" style="background-image:url(https://cdn.framework7.io/placeholder/people-100x100-9.jpg);"></div>
        <div class="message-content">
          <div class="message-name">Kate</div>
          <div class="message-bubble">
            <div class="message-text">Nice!</div>
          </div>
        </div>
      </div>
      <div class="message message-received">
        <div class="message-avatar" style="background-image:url(https://cdn.framework7.io/placeholder/people-100x100-9.jpg);"></div>
        <div class="message-content">
          <div class="message-name">Kate</div>
          <div class="message-bubble">
            <div class="message-text">Like it very much!</div>
          </div>
        </div>
      </div>
      <div class="message message-received">
        <div class="message-avatar" style="background-image:url(https://cdn.framework7.io/placeholder/people-100x100-7.jpg);"></div>
        <div class="message-content">
          <div class="message-name">Blue Ninja</div>
          <div class="message-bubble">
            <div class="message-text">Awesome!</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </f7-page>
</template>
<script>
export default {
}
</script>