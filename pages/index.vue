<template>
  <div class="page">
    <header>
      <nav>
        <router-link to="/" class="logo">
          <img src="/svg/dc_logo.svg" alt="DC">
        </router-link>
        <div class="nav-links">
          <router-link to="/">
            Home
          </router-link>
          <a href="#">Course</a>
          <div class="double-btn-links">
            <a href="#">Contribute</a>
            <a href="#">
              Star
              <img src="/svg/star.svg" alt="star">
            </a>
          </div>
        </div>
      </nav>
      <main class="banner" @contextmenu.stop>
        <div class="content">
          <h1 class="heading">
            Community Driven
          </h1>
          <p>Discover the value of an open, collaborative effort by one of the largest open-source teams</p>
          <button>Start Learning</button>
        </div>
        <img class="dc-center" src="/svg/dc-img.svg" alt="dc-center">
      </main>
    </header>
  </div>
</template>

<script>

export default {}
</script>

<style lang="scss">
.page {
  header {
    background: url('/svg/dc-bg.svg');
    background-size: cover;
    // height: 100vh;
  }
  nav {
    display: flex;
    justify-content: space-between;
    padding: 5vh 2.5vw 0;

    .logo {
      img {
        height: 3rem;
      }
    }

    .nav-links {
      display: flex;
      align-items: center;
      a {
        padding: 0 1rem;
        &.active {
          font-weight: 600;
        }
      }

      .double-btn-links {
        margin-left: 1rem;
        display: flex;
        a {
          padding: 0.5rem 1.25rem;
          color: white;
          background: $deep-blue;
          display: flex;
          align-items: center;

          &:first-child {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            border-right: 1px solid $dark-blue;
          }

          &:last-child {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
          }

          img {
            height: 0.75rem;
            margin-left: 0.5rem;
          }
        }
      }
    }
  }

  .banner {
    display: grid;
    grid-template-columns: 2fr 3fr;
    padding: 10vh 2.5vw;

    .content {
      padding-right: 5vw;
    }

    .heading {
      font-size: 2.5rem;
      font-weight: 500;
    }

    .dc-center {
      max-width: 100%;
    }

    button {
      background: $green;
      border-radius: 10px;
      margin-top: 2rem;
    }
  }
}
</style>
