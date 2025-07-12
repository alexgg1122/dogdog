/**
 * DogDog 主JavaScript文件
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('DogDog 应用已加载');
  
  // 初始化应用
  initApp();
  
  // 获取狗狗品种数据
  fetchBreeds();
});

/**
 * 初始化应用
 */
function initApp() {
  // 移动端菜单切换
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
  
  // 滚动效果
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });
}

/**
 * 从API获取狗狗品种数据
 */
async function fetchBreeds() {
  try {
    const response = await fetch('/api/breeds');
    if (!response.ok) {
      throw new Error('获取狗狗品种数据失败');
    }
    
    const data = await response.json();
    if (data.status === 'success') {
      displayBreeds(data.data);
    }
  } catch (error) {
    console.error('API请求错误:', error);
    // 使用模拟数据作为后备
    displayBreeds(getMockBreeds());
  }
}

/**
 * 显示狗狗品种数据
 * @param {Array} breeds - 狗狗品种数据数组
 */
function displayBreeds(breeds) {
  const breedsContainer = document.querySelector('.breeds-container');
  
  if (!breedsContainer) return;
  
  // 清空容器
  breedsContainer.innerHTML = '';
  
  // 添加每个品种的卡片
  breeds.forEach(breed => {
    const breedCard = document.createElement('div');
    breedCard.className = 'breed-card';
    
    breedCard.innerHTML = `
      <div class="breed-img">
        <img src="/assets/images/breeds/${breed.english_name.toLowerCase().replace(/ /g, '-')}.jpg" 
             alt="${breed.name}" 
             onerror="this.src='/assets/images/dog-placeholder.jpg'">
      </div>
      <div class="breed-content">
        <h3>${breed.name}</h3>
        <p class="breed-english">${breed.english_name}</p>
        <p>${breed.description}</p>
        <a href="/breeds/${breed.id}" class="btn btn-small">了解更多</a>
      </div>
    `;
    
    breedsContainer.appendChild(breedCard);
  });
}

/**
 * 获取模拟狗狗品种数据（当API不可用时使用）
 * @returns {Array} 模拟狗狗品种数据数组
 */
function getMockBreeds() {
  return [
    {
      id: 1,
      name: '金毛寻回犬',
      english_name: 'Golden Retriever',
      description: '友善、可靠、值得信赖的犬种，是最受欢迎的家庭犬之一。'
    },
    {
      id: 2,
      name: '比熊犬',
      english_name: 'Bichon Frise',
      description: '欢快、温柔的小型犬，有着蓬松的白色被毛。'
    },
    {
      id: 3,
      name: '柯基犬',
      english_name: 'Welsh Corgi',
      description: '短腿长身的牧羊犬，聪明活泼，对主人非常忠诚。'
    }
  ];
}