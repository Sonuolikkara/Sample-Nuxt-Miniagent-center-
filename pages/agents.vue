<script setup lang="ts">
import type { Agent } from "~/types/agent";

// Agent data
const agents = ref<Agent[]>([
  {
    id: 1,
    name: "Sonu Sabu",
    email: "sonu@example.com",
    status: "Available"
  },
  {
    id: 2,
    name: "Silla Sabu",
    email: "silla@example.com",
    status: "Busy"
  },
  {
    id: 3,
    name: "Siya Sabu",
    email: "siya@example.com",
    status: "Busy"
  },
  {
    id: 4,
    name: "Sudha Sabu",
    email: "sudha@example.com",
    status: "Available"
  },
  {
    id: 5,
    name: "Sabu Varghese",
    email: "sabu@example.com",
    status: "Offline"
  }
]);

// Search input
const searchQuery = ref("");

// Filter agents based on search
const filteredAgents = computed(() => {
  return agents.value.filter((agent) =>
    agent.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())
  );
});

// Calculate agent statistics
const availableCount = computed(() =>
  agents.value.filter(
    (agent) => agent.status === "Available"
  ).length
);

const busyCount = computed(() =>
  agents.value.filter(
    (agent) => agent.status === "Busy"
  ).length
);

const offlineCount = computed(() =>
  agents.value.filter(
    (agent) => agent.status === "Offline"
  ).length
);

// Change agent status
function changeStatus(agentId: number) {
  const selectedAgent = agents.value.find(
    (agent) => agent.id === agentId
  );

  if (!selectedAgent) {
    return;
  }

  if (selectedAgent.status === "Available") {
    selectedAgent.status = "Busy";
  } else {
    selectedAgent.status = "Available";
  }
}
</script>

<template>
  <main class="container">

    <header class="page-header">
      <div>
        <h1>Agent Management</h1>
        <p>Manage and monitor your contact center agents</p>
      </div>
    </header>

    <!-- Agent Statistics -->
    <section class="statistics">

      <div class="stat-card">
        <h3>Total Agents</h3>
        <p>{{ agents.length }}</p>
      </div>

      <div class="stat-card">
        <h3>Available</h3>
        <p>{{ availableCount }}</p>
      </div>

      <div class="stat-card">
        <h3>Busy</h3>
        <p>{{ busyCount }}</p>
      </div>

      <div class="stat-card">
        <h3>Offline</h3>
        <p>{{ offlineCount }}</p>
      </div>

    </section>

    <!-- Search -->
    <section class="agent-section">

      <div class="section-header">
        <h2>All Agents</h2>

        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search agents..."
        />
      </div>

      <!-- Agent List -->
      <div class="agent-list">

        <AgentCard
          v-for="agent in filteredAgents"
          :key="agent.id"
          :agent="agent"
          @change-status="changeStatus(agent.id)"
        />

        <p v-if="filteredAgents.length === 0">
          No agents found.
        </p>

      </div>

    </section>

  </main>
</template>

<style scoped>
.container {
  max-width: 1100px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.page-header {
  margin-bottom: 30px;
}

.page-header h1 {
  margin-bottom: 8px;
}

.page-header p {
  color: #777;
}

.statistics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 35px;
}

.stat-card {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.stat-card h3 {
  color: #666;
  font-size: 14px;
}

.stat-card p {
  font-size: 28px;
  font-weight: bold;
}

.agent-section {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.section-header {
  margin-bottom: 20px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

@media (max-width: 650px) {
  .statistics {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-header {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>