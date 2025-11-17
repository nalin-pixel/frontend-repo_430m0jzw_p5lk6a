import { I18nProvider } from './i18n'
import App from './App'

export default function AppShell() {
  return (
    <I18nProvider>
      <App />
    </I18nProvider>
  )
}
