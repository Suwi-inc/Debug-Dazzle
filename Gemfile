source "https://rubygems.org"

gem "jekyll", "~> 4.4"
gem "jekyll-feed", "~> 0.17"
gem "jekyll-sitemap", "~> 1.4"
gem "jekyll-seo-tag", "~> 2.8"
gem "webrick", "~> 1.8"

# Windows and JRuby do not include zoneinfo files, so bundle timezone data.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Optional: improves auto-regeneration/file watching on Windows.
gem "wdm", "~> 0.2.0", :install_if => Gem.win_platform?
