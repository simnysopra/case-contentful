import * as React from "react"
import Layout from "../components/layout"

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center gap-4 my-auto">
        <h1>404</h1>
        <h3 className="font-normal">
          Ooops! Denna sida existerar tyvärr inte.
        </h3>
      </div>
    </Layout>
  )
}
