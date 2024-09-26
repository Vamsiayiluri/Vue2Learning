<template>
  <div class="notification-container">
    <div v-for="(notification, index) in notifications" :key="index" class="notification">
      {{ notification.message }}
      <button @click="removeNotification(index)">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notifications: [],
    };
  },
  methods: {
    addNotification(message) {
      this.notifications.push({ message });
    },
    removeNotification(index) {
      this.notifications.splice(index, 1);
    },
  },
};
</script>

<style>
.notification-container {
  position: fixed;
  top: 20px;
  right: 20px;
}
.notification {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
