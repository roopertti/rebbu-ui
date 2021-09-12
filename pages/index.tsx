import type { NextPage } from 'next'

import HomeTemplate from '../components/03-templates/Home'

const Home: NextPage = () => {
  return (
    <HomeTemplate
      introProps={{
        title: 'Stop worrying about packing, leave it to rebbu!',
        description:
          'With rebbu you can create packlists for your trips. Rebbu saves your items, packlists and full packing history!',
        loginBtnText: 'Start packing!',
        loginLink: '/'
      }}
    />
  )
}

export default Home
