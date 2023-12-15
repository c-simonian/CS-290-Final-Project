import React from 'react';

function TopicsPage() {
    return (
    <>
        <h2>Web Development Concepts</h2>

        <nav className="local">
            <a href="#webservers">Web Servers</a>
            <a href="#frontenddesign">Front End Design</a>
            <a href="#optimizingimages">Optimizing Images</a>
            <a href="#favicons">Favicons</a>
            <a href="#CSS">CSS</a>

        </nav>

        <article id="webservers">
            <h3>Web Servers</h3>
            <p>
                In the context of websites and servers, <strong>"index"</strong> refers to an index file or index page.
                In almost all real-world web applications, in the root directory, the index file is
                known as the homepage of the web application. The index file is returned whenever a <strong> GET </strong>
                request is received for the root in a web application. The index file may be shown
                with a default name such as index.html, index.js, index.php, and even default.html,
                which are all allowed as a homepage.
            </p>
            <p>
                In the web developer inspector <strong>Network tab</strong> output screen, the name of the file is shown, 
                as well as the <strong>status code</strong> which is 200 meaning it was successful. The type such that 
                the index.html is a Document and the Request Method, which in this case is GET. When
                viewing files from the web server, there are additional files such as “executor.js”
                and “favicon.ico” displaying in the Network tab. In contrast to this when viewing files 
                from the local computer, the index.html file appears in the Network tab since it directly 
                loads from the file system. There is also a lot more information available on the web 
                server file versus the local computer file. There is information about the host, connection, 
                remote address and much more!
            </p>
            <p>
                The favicon.ico file has a status of 200, which has a <strong>reason-phrase</strong> of OK, meaning that
                the request was successful. This status code will be sent for many cases such as GET,
                <strong> DELETE</strong>, and <strong>PUT</strong> requests. The main.css and the main.js files both do not have a status 200
                because they both failed with a 404 status code, which has a "Not Found" reason-phrase, meaning
                that the resources were not found on the server.
            </p>
            <p>
                The <strong>URL</strong> to the web file, https://web.engr.oregonstate.edu/~simoniac/A1-simoniac/ has several
                components. The <strong>scheme</strong> is represented by "https://" which indicates a secure encrypted connection.
                The <strong>subdomain</strong> is represented by "web.engr." which precedes the host domain. The <strong>host domain </strong>
                is represented by "oregonstate.edu" which displays the web server where the resource is hosted. The <strong>resources </strong>
                are represented by "/~simoniac/A1-simoniac/" which is the path to the file on the server.
            </p>
        </article>

        <article id="frontenddesign">
            <h3>Frontend Design</h3>
            <p>
                The concept of <strong>front end design</strong> is to create the most appropriate experience for users. It is the
                process of designing what users see and interact with on websites. Whether that be by the visual design, graphical user interface (GUI), or the overall 
                interactive experience of the application. Front-end design is crucial as the design will impact how users interact with the application, 
                and if they are satisfied with the overall experience. <strong>Usability</strong>  and <strong>response time</strong> play a huge role in 
                measuring the user's experience, as well as if they will continue to use the app.
            </p>
            
            <p>
                The Five E's of Usability.
            </p>
            <dl>
                <dt><strong>Effective</strong></dt>
                <dd>Allows users to finish their task</dd>
                <dt><strong>Efficient</strong></dt>
                <dd>A well-planned design which allows users to use the site productively.</dd>
                <dt><strong>Easy to Navigate</strong></dt>
                <dd>All actions are clear for any user to find what they are looking for.</dd>
                <dt><strong>Error-Free</strong></dt>
                <dd>Users will have a flawless experience.</dd>
                <dt><strong>Enjoyable</strong></dt>
                <dd>Design and content needed for the application are what the user expected.</dd>
            </dl>

            <p>
                There are various <strong>page-layout tags</strong> that allow for the break-up of the flow of content.
                The <strong>header</strong> element allows for a ceaseless header from page to page so that users know
                they are still on the site. The <strong>nav</strong> element gives users the ease of use of going to the
                main menu, search, stories, locations and much more. The <strong>main</strong> element will display content
                that is unique to that document. The <strong>section</strong> element allows for grouping of content and will
                more than likely include a heading along with content related to it. The <strong>article</strong> element
                is usually used inside a section element and can be thought of as subsections where there may
                be several articles about one section topic. The <strong>aside</strong> element is used for content
                that is related to, as well as can be considered separate from, the topic. The <strong>figure</strong> element is
                used for media and is wrapped around the <strong>figcaption</strong> element, which may describe the media.
                The <strong>blockquote</strong> element allows for extended quotations. The <strong>footer</strong> element will be towards the
                end of the page and will hold content such as legal and contact information.
                The <strong>div</strong> element is used as a placeholder and can divide content when other elements do not fit
                the criteria.
            </p>
            
            <p>
                Understanding <strong>Anchor</strong>  Links in Web Design
            </p>
            <ol>
                <li>Anchors link to <strong>external content</strong> through referencing the URL of the external content. Allowing users
                    to navigate to websites or resources outside the website.</li>
                <li>Anchors link to <strong>internal content</strong> through the relative path of the target content. Allowing users to access
                    different pages or documents on the website.</li>
                <li>Anchors linking from <strong>page to page</strong> use relative paths to display other internal content. Allowing for navigation
                    between different pages or documents on the website.</li>
            </ol>
        </article>


        <article id="optimizingimages">
            <h3>Optimizing Images</h3>
            <p>    
                There are 6 major <strong>online image specifications</strong> on the web. First, using
                descriptive filenames is crucial for <strong>improved search engine optimization</strong>, 
                as they should be as descriptive and concise as possible.
                Second, smaller file sizes are key to faster webpage loading, achievable through 
                cropping, resizing, correct file formats, resolution adjustments, and 
                compatibility with the <strong>RGB</strong> color mode. Third, maintaining exact dimensions 
                ensures both size reduction and the preservation of intended layouts. 
                Fourth, choosing the right file format is essential, with <strong>JPG</strong> for photos, <strong>GIF</strong> or 
                <strong> PNG</strong> for line art, and PNG for images with transparency. Fifth, reducing resolution 
                strikes a balance between image quality and file size, which is very important 
                for optimization. Finally, adherence to the RGB color profile is essential for 
                accurate color representation on digital displays.
            </p>
            <p>
                There are various file formats and each have their purpose. For photos the most 
                appropriate format is JPG, it uses <strong>lossy compression</strong> which allows for reduced file 
                sizes by discarding some image data. While it does discard some image data, the 
                quality is often great. It also is great for gradients and subtle color variations 
                in photos. <strong>WebP</strong> is another format well-suited for photography, 
                effectively reducing files to small sizes, and typically featuring a rectangular 
                aspect. For line art, PNG is the most appropriate format to use since it uses <strong>lossless 
                compression</strong>, meaning it preserves the image quality. It also supports alpha channel 
                transparency and may be best suited for images such as logos, icons, and line art. 
                The <strong>SVG</strong> file format is commonly employed for line art as well and finds applications in 
                creating two-dimensional, interactive, and even animated images by utilizing XML.       
            </p>
        </article>

        <article id="favicons">
            <h3>Favicons</h3>
            <p>
                <strong>Favicons</strong>, are small website icons and help users identify
                and interact with websites. There are various ways in which
                browsers and devices use favicons such as appearing in bookmarks, 
                tabs, home screens, and the address bar. They can be saved in GIF, 
                PNG, <strong>ICO</strong> and SVG file formats. The most common file format currently 
                are SVG and PNG. 
            </p>
        </article>

        <article id="CSS">
            <h3>CSS</h3>
            <p>
                There are many reasons for incorporating <strong>Cascading Style Sheets</strong> for websites and apps, such as being easier 
                to manage, navigate, and modify. It allows for the control of presentation and layout 
                of the content, as well as have a consistent and uniform appearance. It also allows 
                for a separation of concerns since the design on the webpage can now be isolated from 
                the content and behavior, which allows for easier upkeep on the website or app. 
                Another great thing about CSS is that it offers scalability such that it can adapt 
                to different screen sizes and devices through design techniques, ensuring that content 
                is functional on any device.
            </p>
            
            <p>
                There are five ways to incorporate styles. The most common way is by using external stylesheets, 
                meaning the use of a .css file would allow one to link to an HTML document. One could also embed 
                styles directly in HTML files but, these changes are typically for one-off style changes. Another 
                way is by embedding styles directly into <strong>JavaScript</strong> files, which just like HTML is usually used 
                for one-off style changes. Inline within an element can also be done using attributes and values. 
                The last possibility is by manipulating the Document Object Model <strong>DOM</strong> in regular JavaScript.
            </p>
        </article>
    </>
    );
}

export default TopicsPage;