import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { execSync } from "child_process"

// Get last commit date from git
const getLastUpdated = () => {
  try {
    const date = execSync('git log -1 --format=%ci').toString().trim()
    const d = new Date(date)
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = String(d.getFullYear()).slice(-2)
    return `${month}/${year}`
  } catch {
    return '12/24'
  }
}

export default defineConfig({
  plugins: [react()],
  base: '/pweb/',
  define: {
    __LAST_UPDATED__: JSON.stringify(getLastUpdated()),
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
})
