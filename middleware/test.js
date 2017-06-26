export default function ({store}) {
  // If user not connected, redirect to /
  if (store.state.menuIsActive === true) {
    store.commit('toggleMenuState')
  }
}
