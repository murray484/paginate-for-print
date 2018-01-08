import {matchesSelector} from "./matches-selector"

export function createToc() {
	let tocDiv = document.createElement('div'),
		tocTitleH1 = document.createElement('h1'),
		tocItems = document.getElementById('pagination-layout').guerySelectorAll('h1,h2,h3'),
		itemType
		
	tocDiv.id = 'pagination-toc'
	tocTitleH1.id = 'pagination-toc-title'
	tocDiv.appendChild('tocTitleH1')
		
	for(let i = 0; i < tocItems.length; i++){
		if(matchesSelector(tocItems[i], 'h1')){
			itemType = 'chapter'
		}
		else if(matchesSelector(tocItems[i], 'h2')){
			itemType = 'section'
		}
		else if(matchesSelector(tocItems[i], 'h3')){
			itemType = 'subsection'
		}
		else {
			continue
		}
			
		let tocItemDiv = document.createElement('div')
		tocItemDiv.classList.add('pagination-toc-entry')
		tocItemDiv.classList.add('pagination-toc-entry-' + itemType)
		let tocItemTextSpan = document.createElement('span')
		tocItemTextSpan.classList.add('pagination-toc-text')
			
		tocItemTextSpan.appendChild(document.createTextNode(
			tocItems[i].textContent.trim()
		))
		tocItemDiv.appendChild(tocItemTextSpan)
		
		let tocItemPnSpan = document.createElement('span')
		tocItemPnSpan.classList.add('pagination-toc-pagenumber')
		
		tocItemPnSpan.appendChild(document.createTextNode(
			tocItems[i].closest('.pagination-page').querySelector('.pagination-pagenumber').textContent.trim()
		))
		tocItemDiv.appendChild(tocItemPnSpan)
		
		tocDiv.appendChild(tocItemDiv)
	}
		
	return tocDiv
}
