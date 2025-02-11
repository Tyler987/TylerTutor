window.addEventListener('load', function() {
    // fetch JSON data
    fetch('data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(data => {
        // create header
        document.getElementById('header-title').textContent = data.header.title;
        document.getElementById('header-subtitle').textContent = data.header.subtitle;
        
        // create math
        let mathHTML = `<h2>${data.mathTutoring.title}</h2>`;
        data.mathTutoring.sections.forEach(section => {
          mathHTML += `<section>
            <h3>${section.title}</h3>
            <ul>`;
          section.list.forEach(item => {
            mathHTML += `<li>${item}</li>`;
          });
          mathHTML += `</ul></section>`;
        });
        document.getElementById('math-tutoring').innerHTML = mathHTML;
        
        // create coding
        let codingHTML = `<h2>${data.codingTutoring.title}</h2>`;
        codingHTML += `<h3><strong>${data.codingTutoring.teachTitle}</strong></h3><ul>`;
        data.codingTutoring.teachList.forEach(lang => {
          codingHTML += `<li>${lang}</li>`;
        });
        codingHTML += `</ul>`;
  
        // add focus
        codingHTML += `<h3><strong>${data.codingTutoring.codingFocus.title}</strong></h3><ul>`;
        data.codingTutoring.codingFocus.list.forEach(item => {
          codingHTML += `<li>${item}</li>`;
        });
        codingHTML += `</ul>`;
  
        // add requirements
        codingHTML += `<h3><strong>${data.codingTutoring.learningCode.title}</strong></h3><ul>`;
        data.codingTutoring.learningCode.list.forEach(item => {
            codingHTML += `<li>${item}</li>`;
        });
        codingHTML += `</ul>`;
  
        // Add resources
        codingHTML += `<h3><strong>${data.codingTutoring.additionalResources.title}</strong></h3><ul>`;
        data.codingTutoring.additionalResources.list.forEach(resource => {
            codingHTML += `<li><a href="${resource.url}" target="_blank">${resource.name}</a></li>`;
        });
        codingHTML += `</ul>`;
  
        // Add github
        codingHTML += `<p><strong>${data.codingTutoring.github.label}</strong> <a href="${data.codingTutoring.github.linkUrl}" target="_blank">${data.codingTutoring.github.linkText}</a></p>`;
  
        document.getElementById('coding-tutoring').innerHTML = codingHTML;
        
        // create about me
        let aboutHTML = `<h2>${data.aboutMe.title}</h2><p>${data.aboutMe.content}</p>`;
        document.getElementById('about-me').innerHTML = aboutHTML;
        
        // create FAQ Section
        let faqHTML = `<h2>${data.faq.title}</h2>`;
        data.faq.items.forEach(item => {
          faqHTML += `<h4>${item.question}</h4><p>${item.answer}</p>`;
        });
        document.getElementById('faq').innerHTML = faqHTML;
        
        // create in touch
        let contactHTML = `<h2>${data.getInTouch.title}</h2>`;
        contactHTML += `<p>${data.getInTouch.intro}</p><ul>`;
        data.getInTouch.contactList.forEach(contact => {
          contactHTML += `<li><strong>${contact.label}</strong> <a href="${contact.linkUrl}" target="_blank">${contact.linkText}</a></li>`;
        });
        contactHTML += `</ul>`;
        contactHTML += `<p><strong>${data.getInTouch.email.label}</strong> <a href="mailto:${data.getInTouch.email.address}">${data.getInTouch.email.address}</a></p>`;
        document.getElementById('forms-section').innerHTML = contactHTML;
        
        // create footer
        document.getElementById('footer-text').innerHTML = data.footer.text;
        
        // fade in
        const boxes = document.querySelectorAll('.info-box');
        boxes.forEach((box, index) => {
          setTimeout(() => {
            box.classList.add('fade-in');
          }, index * 300);
        });
      })
      .catch(error => console.error('Error loading JSON:', error));
  });
  