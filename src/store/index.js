import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import route from './modules/route'
import trip from './modules/trip'
import point from './modules/point'
import ticket from './modules/ticket'
import payme from './modules/payme'
import news from './modules/news'
import vehicle from './modules/vehicle'
import promotion from './modules/promotion'
import comment from './modules/comment'
import component from './modules/component'
import partner from './modules/partner'
import question from './modules/question'
import place from './modules/place'
import config from './modules/config'
import system from './modules/system'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    route,
    trip,
    point,
    ticket,
    payme,
    news,
    vehicle,
    promotion,
    comment,
    component,
    partner,
    question,
    place,
    config,
    system
  },
  getters
})

export default store
