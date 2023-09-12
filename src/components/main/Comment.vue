<template>
  <div class="comment py-5 px-5">
    <div class="header d-flex align-center justify-space-between">
      <div class="profile d-flex align-center">
        <div class="profile__picture">
          <v-avatar
            color="grey-darken-1"
            size="40"
          ></v-avatar>
        </div>
        <div class="profile__username font-weight-medium ml-2">User123</div>
      </div>
      <div class="actions">
        <v-menu location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn
              icon
              color="secondary"
              size="30"
              variant="text"
              v-bind="props"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title class="d-flex align-center">
                <v-btn
                  color="primary"
                  variant="text"
                >
                  <v-icon>mdi-close</v-icon>
                  <span class="ml-2">Delete</span>
                </v-btn>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="d-flex align-center">
                <v-btn
                  color="primary"
                  variant="text"
                >
                  <v-icon>mdi-alert-octagon</v-icon>
                  <span class="ml-2">Report</span>
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
    <div class="content text-grey-darken-2 pr-10 mt-3">
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  content: {
    type: String,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.comment {
  transition: background-color 0.2s ease-in-out;

  &:not(:last-child) {
    border-bottom: 1px solid #eaeaea;
  }

  &:hover {
    background-color: #fafafa;
  }
}

.content {
  line-height: 1.8rem;
}

.dropdown {
  position: absolute;
  top: 110%;
  left: 0;
  z-index: 1;
  border-radius: 5px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
      margin: 10px 0;

      border-radius: 50%;
      background-color: white;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
}
</style>
