import { siteConfig } from '@/lib/config'

function SiteInfo ({ title }) {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
        <footer
            className='relative leading-6 justify-start w-full text-gray-600 dark:text-gray-300 text-xs '
        >
            <span> © {`${copyrightDate}`}
            <span className='text-xs font-serif'> Powered by <a>xiaokai</a></span><br /></span>
            <h1>{title}</h1>
        </footer>
  )
}
export default SiteInfo
