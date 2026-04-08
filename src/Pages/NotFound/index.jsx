import Layout from "../../Components/Layout"
import { Helmet } from 'react-helmet-async'
function NotFound() {
    return (
        <>
          <Helmet>
          <title>404 - Page Not Found</title>
          {/* This tells react-snap: stop here, don't crawl further */}
          <meta name="prerender-status-code" content="404" />
          </Helmet>
         <div>Page not found</div>
        </>
    )
  }
  export default NotFound
  