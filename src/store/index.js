import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const profile = {
  info: {
    name: 'Muhammad Ubaid Raza',
    title: 'Full Stack Web Developer',
    email: 'mubaidr@gmail.com',
    location: 'Rawalpindi, Pakistan',
    profiles: [
      {
        title: 'Github',
        url: 'https://github.com/mubaidr'
      },
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mubaidr'
      },
      {
        title: 'Twitter',
        url: 'https://www.twitter.com/mubaidr'
      }
      /* {
        title: 'Freelancer',
        url: 'https://www.freelancer.com/u/razamubaid',
        icon: 'work'
      } */
    ]
  },
  sections: {
    about: {
      title: 'About Me',
      summary:
        "Web developer with more than 4 years of well-rounded experience with a degree in the Computer & Information Sciences, extensive knowledge of modern Web techniques and love for coffee. I'm also passionate about open source.",
      objective:
        'Looking for an opportunity to work and upgrade, as well as being involved in an organization that believes in gaining a competitive edge and giving back to the community.'
    },
    experience: {
      title: 'Experience',
      list: [
        {
          organization: 'abc',
          role: 'abc',
          description: 'abc'
        },
        {
          organization: 'abc',
          role: 'abc',
          description: 'abc'
        },
        {
          organization: 'abc',
          role: 'abc',
          description: 'abc'
        }
      ]
    },
    skills: {
      title: 'Skills',
      lists: [
        {
          title: 'Languages & Frameworks',
          list: [
            {
              title: 'Node.js'
            },
            {
              title: 'TypeScript'
            },
            {
              title: 'JavaScript'
            },
            {
              title: 'VueJS'
            },
            {
              title: 'C#'
            },
            {
              title: 'ASP.NET Web Forms'
            }
          ]
        },
        {
          title: 'Databases',
          list: [
            {
              title: 'MSSQL'
            },
            {
              title: 'PostgreSQL'
            },
            {
              title: 'MongoDB'
            }
          ]
        },
        {
          title: 'Other',
          list: [
            {
              title: 'Docker'
            },
            {
              title: 'Jest'
            },
            {
              title: 'Pug'
            },
            {
              title: 'Bulma'
            },
            {
              title: 'Stylus'
            },
            {
              title: 'SASS/SCSS'
            },
            {
              title: 'Git'
            },
            {
              title: 'Apache Cordova'
            },
            {
              title: 'Chrome Extensions'
            }
          ]
        }
      ]
    }
  }
}

const getters = {
  info(state) {
    return state.info
  },
  skills(state) {
    return state.skills
  },
  sections(state) {
    return state.sections
  },
  portfolio(state) {
    return state.portfolio
  }
}

export default () => {
  const store = new Vuex.Store({
    state: profile,
    getters
  })

  return store
}
