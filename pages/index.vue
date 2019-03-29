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
      <div class="banner" @contextmenu.stop>
        <div class="content">
          <h1 class="heading">
            Frontend Learning Resource Path
          </h1>
          <p>
            Discover the value of an open, collaborative effort by one of the largest open-source teams
            <br>
            <small>- by Devcenter Square</small>
          </p>
          <button>Start Learning</button>
        </div>
        <img class="dc-center" src="/svg/dc-img.svg" alt="dc-center">
      </div>
    </header>
    <main class="main-content">
      <section class="courses">
        <h2>Everyone Benefits</h2>
        <p class="sub-text">
          By being open and freely available, it enables and encourages collaboration and <br> the development of technology, solving real world problems.
        </p>
        <div class="course-lists">
          <div v-for="(course, courseIndex) in courses" :key="courseIndex" class="course card center-card">
            <div class="card-content">
              <h2 class="course-title" v-text="course.title" />
              <p class="course-level" :style="{ color: course.color }" v-text="course.level" />
              <a class="btn" :href="course.link" target="_blank">
                <span :style="{ background: course.color }">Open Course</span>
                <img src="/svg/study.svg" alt="study">
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="join-us">
        <h2>Join the Community</h2>
        <p>Learn what it means to join us &amp; contribute, find and <br> get started on a new project.</p>
        <a class="join-us-btn" href="#">Join Us</a>
        <img src="/svg/dc-people.svg" alt="join the community of tech people">
      </section>
      <section class="contributors">
        <h2>Contributors</h2>
        <div class="contributors-list">
          <div v-for="(contributor, contributorIndex) in contributors" :key="contributorIndex" class="contributor" :class="{ blank: contributor.empty }">
            <img v-if="!contributor.empty" class="profile-pic circle" :src="contributor.avatarUrl" alt="name of contributor">
            <h4 v-if="!contributor.empty" v-text="contributor.fullName" />
            <div v-if="!contributor.empty" class="social-links">
              <a v-for="(link, linkIndex) in contributor.socialLinks" :key="linkIndex" :href="link[0]">
                <img class="social-icon" :src="link[1]" alt="social icon image">
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="supporters-and-socials" />
    </main>
    <footer class="footer" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [
        { title: 'front end development', level: 'beginner', color: '#2CA0FB', link: 'https://learning-resource-path.gitbook.io/resources/#beginner-level-front-end-development' },
        { title: 'frontend development', level: 'mid-level', color: '#3DC7C9', link: 'https://learning-resource-path.gitbook.io/resources/#mid-level-front-end-development' },
        { title: 'frontend development', level: 'advanced', color: '#EB4A34', link: 'https://learning-resource-path.gitbook.io/resources/#advanced-level-front-end-development' },
        { title: 'frontend development', level: 'expert', color: '#FBA12C', link: 'https://learning-resource-path.gitbook.io/resources' }
      ],
      contributors: [
        {
          fullName: 'Seun Awoyele',
          avatarUrl: 'https://avatars2.githubusercontent.com/u/10561590?s=460&v=4',
          socialLinks: [
            ['#', '/svg/facebook.svg'],
            ['#', '/svg/twitter.svg'],
            ['#', '/svg/slack.png']
          ],
          empty: false
        },
        {
          fullName: 'Egwuenu Gift',
          avatarUrl: 'https://avatars2.githubusercontent.com/u/17781315?s=460&v=4',
          socialLinks: [
            ['#', '/svg/facebook.svg'],
            ['#', '/svg/twitter.svg'],
            ['#', '/svg/slack.png']
          ],
          empty: false
        },
        {
          fullName: 'Orim Dominic Adah',
          avatarUrl: 'https://avatars3.githubusercontent.com/u/37955249?s=460&v=4',
          socialLinks: [
            ['#', '/svg/facebook.svg'],
            ['#', '/svg/twitter.svg'],
            ['#', '/svg/slack.png']
          ],
          empty: false
        },
        {
          fullName: 'AminuJatto AbdulQahhar',
          avatarUrl: 'https://avatars0.githubusercontent.com/u/12856872?s=460&v=4',
          socialLinks: [
            ['#', '/svg/facebook.svg'],
            ['#', '/svg/twitter.svg'],
            ['#', '/svg/slack.png']
          ],
          empty: false
        },
        {
          empty: true
        },
        {
          fullName: 'Abdulsamii Ajala',
          avatarUrl: 'https://pbs.twimg.com/profile_images/1078793008244494338/DoFWQU9E_400x400.jpg',
          socialLinks: [
            ['#', '/svg/facebook.svg'],
            ['#', '/svg/twitter.svg'],
            ['#', '/svg/slack.png']
          ],
          empty: false
        },
        {
          fullName: 'Sylvester Nnachi',
          avatarUrl: 'https://pbs.twimg.com/profile_images/1054742899982852097/ypL4sWYR_400x400.jpg',
          socialLinks: [
            ['#', '/svg/facebook.svg'],
            ['#', '/svg/twitter.svg'],
            ['#', '/svg/slack.png']
          ],
          empty: false
        },
        {
          empty: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" src="./index.scss" scoped />
