# Reuse service layout to render pages using data driven approach.
Jekyll::Hooks.register :site, :post_read do |site|
  Jekyll.logger.info "Generating service pages..."
  data = site.data["services"]
  data.each do |item|
    site.pages << Jekyll::PageWithoutAFile
      .new(site, site.source, File.join("services", item["slug"]), "index.html")
      .tap do |page|
        page.data["layout"] = "service"
        page.data["title"] = item["title"]
        page.data["description"] = item["description"]
        page.data["slug"] = item["slug"]
        page.data["sections"] = item["sections"] || []
      end
  end
end
