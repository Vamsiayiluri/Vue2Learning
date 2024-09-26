<template>
  <span id="app">
    <header class="app-header">
      <div class="logo">
        <h1>My App</h1>
      </div>
      <nav class="icons">
        <i class="fas fa-home" title="Home"></i>
        <i class="fas fa-bell" title="Notifications"></i>
        <i class="fas fa-user-circle" title="Profile"></i>
        <i class="fas fa-cog" title="Settings"></i>
      </nav>
    </header>
    <div class="header-container sticky-nav">
      <!-- First Row: Title and Breadcrumb -->
      <div class="header-top">
        <span class="header-title">Documentation</span>
        <span class="header-subtitle"> > FCM</span>
      </div>

      <!-- Second Row: Menu or Tabs -->
      <div class="header-bottom">
        <nav class="menu">
          <a href="#" class="menu-item active">Overview</a>
          <a href="#" class="menu-item">Fundamentals</a>
          <a href="#" class="menu-item">Build</a>
          <a href="#" class="menu-item">Run</a>
          <a href="#" class="menu-item">Reference</a>
          <a href="#" class="menu-item">Samples</a>
        </nav>
      </div>
    </div>
    <div class="layout">
      <!-- Sidebar -->
      <aside class="sidebar">
        <!-- Filter Button -->
        <div class="filter-button">
          <button @click="toggleFilter">
            <i class="fas fa-filter"></i> Filter
          </button>
        </div>

        <!-- Overview Section -->
        <div class="section">
          <div class="section-item">Overview</div>
        </div>

        <!-- Release Section -->
        <div class="section">
          <div class="section-header" @click="toggleSection('release')">
            RELEASE
            <i
              :class="
                isOpen('release') ? 'fas fa-chevron-up' : 'fas fa-chevron-down'
              "
            ></i>
          </div>
          <div v-if="isOpen('release')" class="section-content">
            <div class="section-item">Test Lab</div>
            <div class="section-item">App Distribution</div>
          </div>
        </div>

        <!-- Monitor Section -->
        <div class="section">
          <div class="section-header" @click="toggleSection('monitor')">
            MONITOR
            <i
              :class="
                isOpen('monitor') ? 'fas fa-chevron-up' : 'fas fa-chevron-down'
              "
            ></i>
          </div>
          <div v-if="isOpen('monitor')" class="section-content">
            <div class="section-item">Crashlytics</div>
            <div class="section-item">Performance Monitoring</div>
          </div>
        </div>

        <!-- Iterate Section -->
        <div class="section">
          <div class="section-header" @click="toggleSection('iterate')">
            ITERATE
            <i
              :class="
                isOpen('iterate') ? 'fas fa-chevron-up' : 'fas fa-chevron-down'
              "
            ></i>
          </div>
          <div v-if="isOpen('iterate')" class="section-content">
            <div class="section-item">Remote Config</div>
            <div class="section-item">A/B Testing</div>
          </div>
        </div>
      </aside>

      <!-- Main Content Area -->
      <div class="main-content">
        <h1>Main Content Area</h1>
        <!-- Your main content goes here -->
      </div>
    </div>
  </span>
</template>

<script>
export default {
  name: "SamplePage",
  data() {
    return {
      openSections: {},
    };
  },
  methods: {
    toggleSection(section) {
      this.$set(this.openSections, section, !this.isOpen(section));
    },
    isOpen(section) {
      return this.openSections[section];
    },
    toggleFilter() {
      console.log("Filter clicked");
    },
  },
};
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #2364aa;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.logo h1 {
  margin: 0;
  font-size: 24px;
}

nav.icons i {
  font-size: 24px;
  margin-left: 20px;
  cursor: pointer;
}

nav.icons i:hover {
  color: #ffce00;
}
.header-container {
  background-color: #333;
  color: white;
  padding: 10px;
  border-bottom: 1px solid #444;
  width: 100%;
}

/* First row styles (Title and Breadcrumb) */
.header-top {
  font-size: 18px;
  display: flex;
  align-items: center;
}
.sticky-nav {
  position: sticky;
  top: 20px;
  background-color: #333;
  z-index: 9;
}
.header-title {
  color: #ffce00; /* Custom color for the title */
}

.header-subtitle {
  margin-left: 5px;
  color: #bbb;
}

/* Second row styles (Menu/Tabs) */
.header-bottom {
  margin-top: 5px;
}

.menu {
  display: flex;
  gap: 20px; /* Space between menu items */
}

.menu-item {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  font-size: 16px;
}

.menu-item.active {
  border-bottom: 2px solid #ffce00; /* Active item highlight */
  color: #ffce00;
}

.menu-item:hover {
  color: #ffce00; /* Hover effect for menu items */
}
.layout {
  display: flex;
}

/* Sidebar Styles */
.sidebar {
  width: 250px;
  background-color: #f4f4f4;
  border-right: 1px solid #ddd;
  padding: 20px;
  height: 100vh;
  overflow-y: auto;
}

/* Filter Button */
.filter-button {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}

.filter-button button {
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  padding: 10px;
  width: 100%;
  text-align: left;
  font-size: 16px;
  cursor: pointer;
}

/* Section Styles */
.section {
  margin-top: 20px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  background-color: #ddd;
}

.section-content {
  padding: 10px;
}

.section-item {
  padding: 10px;
  background-color: white;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  cursor: pointer;
}

.section-item:hover {
  background-color: #e0e0e0;
}

/* Main Content Area Styles */
.main-content {
  flex-grow: 1;
  padding: 20px;
}
</style>
