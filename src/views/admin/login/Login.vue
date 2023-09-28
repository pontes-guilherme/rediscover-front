<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center">
      <div class="page-container d-flex justify-center align-center">
        <div class="page">
          <header>
            <div class="logo-container py-16">
              <img
                  src="../../../assets/logo.svg"
                  alt=""
                  class="logo-container__logo"
              >
            </div>
          </header>

          <main class="mt-16">
            <v-form
                v-model="formValid"
                @submit="onSubmit"
            >
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        type="email"
                        required
                    />
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12">
                    <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="Password"
                        type="password"
                        required
                    />
                  </v-col>
                </v-row>

                <v-row class="mb-5">
                  <v-col cols="12">
                    <div class="text-body-2">
                      <router-link to="/admin/password-recovery/step-1" class="text-primary">
                        Forgot your password?
                      </router-link>
                    </div>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12">
                    <v-btn-primary
                        type="submit"
                        block
                        :disabled="!formValid"
                    >
                      Login
                    </v-btn-primary>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </main>
        </div>
      </div>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import {emailRules, passwordRules} from "@/views/admin/login/formRules.rules";
import {useAuthStore} from '@/store/pages/admin/auth/auth.store';
import {storeToRefs} from "pinia";

const store = useAuthStore();

const {
  login
} = store;

const {
  email,
  password,
  formValid,
} = storeToRefs(store);

function onSubmit(e: Event) {
  e.preventDefault();
  login()
}

</script>

<style lang="scss" scoped>
.page-container {
  .page {
    @media (min-width: 600px) {
      width: 600px;
    }
  }
}

.logo-container {
  &__logo {
    width: 300px;
    height: auto;
  }
}
</style>
