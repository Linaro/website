require 'nokogiri'
require 'open-uri'
require 'uri'

module Jekyll

  class RemotePageInclude < Liquid::Tag

    def initialize(tag_name, markup, tokens)
      #markup is what is defined in the tag. Lets make it a URL so devs 
      #don't have to update code if the URL changes.
      url = markup

      #check if the URL is valid
      if url =~ URI::regexp
        #grab the remote document with nokogiri
        encoded_url = URI.encode(url)
        parsed_url = URI.parse(encoded_url)
        
        doc = Nokogiri::HTML(open(parsed_url))

        #search the document for the HTML element you want
        @fetched_content = doc.at_xpath("//div[@id='content']")
      else
        raise 'Invalid URL passed to RemotePageInclude'
      end

      super
    end

    def render(context)
      output = super
      if @fetched_content 
        @fetched_content.to_s
      else
        "Something went wrong in RemotePageInclude"
      end
    end
  end
end

Liquid::Template.register_tag('remote_page', Jekyll::RemotePageInclude)