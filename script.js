// Enhanced Windows-1256 to UTF-8 conversion with more comprehensive character mapping
const windows1256ToUtf8 = {
    0x80: 0x20AC, 0x81: 0x067E, 0x82: 0x201A, 0x83: 0x0192,
    0x84: 0x201E, 0x85: 0x2026, 0x86: 0x2020, 0x87: 0x2021,
    0x88: 0x02C6, 0x89: 0x2030, 0x8A: 0x0679, 0x8B: 0x2039,
    0x8C: 0x0152, 0x8D: 0x0686, 0x8E: 0x0698, 0x8F: 0x0688,
    0x90: 0x06AF, 0x91: 0x2018, 0x92: 0x2019, 0x93: 0x201C,
    0x94: 0x201D, 0x95: 0x2022, 0x96: 0x2013, 0x97: 0x2014,
    0x98: 0x06A9, 0x99: 0x2122, 0x9A: 0x0691, 0x9B: 0x203A,
    0x9C: 0x0153, 0x9D: 0x200C, 0x9E: 0x200D, 0x9F: 0x06BA,
    0xA0: 0x00A0, 0xA1: 0x060C, 0xA2: 0x00A2, 0xA3: 0x00A3,
    0xA4: 0x00A4, 0xA5: 0x00A5, 0xA6: 0x00A6, 0xA7: 0x00A7,
    0xA8: 0x00A8, 0xA9: 0x00A9, 0xAA: 0x06BE, 0xAB: 0x00AB,
    0xAC: 0x00AC, 0xAD: 0x00AD, 0xAE: 0x00AE, 0xAF: 0x00AF,
    0xB0: 0x00B0, 0xB1: 0x00B1, 0xB2: 0x00B2, 0xB3: 0x00B3,
    0xB4: 0x00B4, 0xB5: 0x00B5, 0xB6: 0x00B6, 0xB7: 0x00B7,
    0xB8: 0x00B8, 0xB9: 0x00B9, 0xBA: 0x061B, 0xBB: 0x00BB,
    0xBC: 0x00BC, 0xBD: 0x00BD, 0xBE: 0x00BE, 0xBF: 0x061F,
    0xC0: 0x06C1, 0xC1: 0x0621, 0xC2: 0x0622, 0xC3: 0x0623,
    0xC4: 0x0624, 0xC5: 0x0625, 0xC6: 0x0626, 0xC7: 0x0627,
    0xC8: 0x0628, 0xC9: 0x0629, 0xCA: 0x062A, 0xCB: 0x062B,
    0xCC: 0x062C, 0xCD: 0x062D, 0xCE: 0x062E, 0xCF: 0x062F,
    0xD0: 0x0630, 0xD1: 0x0631, 0xD2: 0x0632, 0xD3: 0x0633,
    0xD4: 0x0634, 0xD5: 0x0635, 0xD6: 0x0636, 0xD7: 0x00D7,
    0xD8: 0x0637, 0xD9: 0x0638, 0xDA: 0x0639, 0xDB: 0x063A,
    0xDC: 0x0640, 0xDD: 0x0641, 0xDE: 0x0642, 0xDF: 0x0643,
    0xE0: 0x00E0, 0xE1: 0x0644, 0xE2: 0x00E2, 0xE3: 0x0645,
    0xE4: 0x0646, 0xE5: 0x0647, 0xE6: 0x0648, 0xE7: 0x00E7,
    0xE8: 0x00E8, 0xE9: 0x00E9, 0xEA: 0x00EA, 0xEB: 0x00EB,
    0xEC: 0x0649, 0xED: 0x064A, 0xEE: 0x00EE, 0xEF: 0x00EF,
    0xF0: 0x064B, 0xF1: 0x064C, 0xF2: 0x064D, 0xF3: 0x064E,
    0xF4: 0x00F4, 0xF5: 0x064F, 0xF6: 0x0650, 0xF7: 0x00F7,
    0xF8: 0x0651, 0xF9: 0x00F9, 0xFA: 0x0652, 0xFB: 0x00FB,
    0xFC: 0x00FC, 0xFD: 0x200E, 0xFE: 0x200F, 0xFF: 0x06D2
};

// Language Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('languageToggle');
    const htmlElement = document.documentElement;

    // Complete translations object
    const translations = {
        ar: {
            // Header
            title: "محول ترجمات العربية",
            subtitle: "إصلاح مشاكل الترميز في ملفات الترجمة",
            
            // Hero Section
            heroTitle: "حل مشاكل الترميز في ملفات الترجمة العربية",
            heroText: "هل تظهر الترجمات العربية الخاصة بك كرموز غريبة؟ هذا الأداة تقوم بإصلاح ملفات الترجمة المحفوظة بترميز خاطئ (Windows-1256) عن طريق تحويلها إلى ترميز UTF-8 مع الحفاظ على جميع الأحرف العربية.",
            features: [
                "يدعم جميع صيغ ملفات الترجمة (.srt, .sub)",
                "تحويل سريع بدون حاجة لتثبيت برامج",
                "معالجة الملفات تتم على جهازك فقط"
            ],
            
            // Converter Section
            fileUpload: "اسحب وأسقط ملف الترجمة هنا أو",
            fileButton: "اختر ملف",
            fileRequirements: "(يدعم ملفات .srt, .sub بحجم يصل إلى 5MB)",
            outputLabel: "صيغة الملف الناتج:",
            formatOptions: ["نفس صيغة الملف الأصلي", ".srt", ".sub", ".txt"],
            convertBtn: "تحويل الملف",
            downloadBtn: "تنزيل الملف المحول",
            
            // Footer
            madeBy: "صنع بفخر من قبل جابوني",
            joinCommunity: "انضم إلى مجتمعنا",
            contactUs: "تواصل معنا عبر الواتساب",
            copyright: "© 2025 Japoni . جميع الحقوق محفوظة.",
            
            // Status Messages
            statusMessages: {
                fileTooLarge: 'الملف كبير جدًا. الحد الأقصى للحجم هو 5MB.',
                invalidExtension: 'صيغة الملف غير مدعومة. الرجاء اختيار ملف .srt أو .sub',
                noFileSelected: 'الرجاء اختيار ملف أولاً',
                conversionError: 'حدث خطأ أثناء التحويل:',
                readError: 'حدث خطأ أثناء قراءة الملف. الرجاء المحاولة مرة أخرى.',
                success: 'تم تحويل الملف بنجاح! الترجمات يجب أن تظهر بشكل صحيح الآن.'
            },
            fileSizeUnits: ['بايت', 'كيلوبايت', 'ميجابايت']
        },
        en: {
            // Header
            title: "Arabic Subtitle Converter",
            subtitle: "Fix subtitle encoding issues",
            
            // Hero Section
            heroTitle: "Solve Arabic Subtitle Encoding Problems",
            heroText: "Are your Arabic subtitles showing as gibberish? This tool fixes subtitle files saved in the wrong encoding (Windows-1256) by converting them to UTF-8 while preserving all Arabic characters.",
            features: [
                "Supports all subtitle formats (.srt, .sub)",
                "Fast conversion - no software needed",
                "Files processed locally on your device"
            ],
            
            // Converter Section
            fileUpload: "Drag & drop your subtitle file here or",
            fileButton: "Select File",
            fileRequirements: "(Supports .srt, .sub files up to 5MB)",
            outputLabel: "Output format:",
            formatOptions: ["Same as original", ".srt", ".sub", ".txt"],
            convertBtn: "Convert File",
            downloadBtn: "Download Converted File",
            
            // Footer
            madeBy: "Proudly made by Japoni",
            joinCommunity: "Join our community",
            contactUs: "Contact us on WhatsApp",
            copyright: "© 2025 Japoni. All rights reserved.",
            
            // Status Messages
            statusMessages: {
                fileTooLarge: 'File too large. Maximum size is 5MB.',
                invalidExtension: 'Unsupported file format. Please choose .srt or .sub file',
                noFileSelected: 'Please select a file first',
                conversionError: 'Error converting file:',
                readError: 'Error reading file. Please try again.',
                success: 'File converted successfully! Your subtitles should now display correctly.'
            },
            fileSizeUnits: ['bytes', 'KB', 'MB']
        }
    };

    // Initialize language
    let currentLang = localStorage.getItem('preferredLanguage') || 'ar';
    updateLanguage();

    // Toggle language
    function toggleLanguage() {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('preferredLanguage', currentLang);
        updateLanguage();
    }

    // Update all text elements while preserving images
    function updateLanguage() {
        const lang = translations[currentLang];
        
        // Update button text
        languageToggle.querySelector('.lang-text').textContent = currentLang === 'ar' ? 'EN' : 'AR';
        
        // Update HTML attributes
        htmlElement.lang = currentLang;
        htmlElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        
        // Update document title
        document.title = currentLang === 'ar' 
            ? "محول ترجمات العربية - تحويل من Windows-1256 إلى UTF-8" 
            : "Arabic Subtitle Converter - Windows-1256 to UTF-8";
        
        // Update meta description
        document.querySelector('meta[name="description"]').setAttribute('content',
            currentLang === 'ar' 
                ? "تحويل ملفات الترجمة العربية من ترميز Windows-1256 إلى UTF-8"
                : "Convert Arabic subtitle files from Windows-1256 to UTF-8 encoding"
        );

        // Header
        document.querySelector('header h1').textContent = lang.title;
        document.querySelector('.subtitle').textContent = lang.subtitle;
        
        // Hero Section
        document.querySelector('.hero h2').textContent = lang.heroTitle;
        document.querySelector('.hero p').textContent = lang.heroText;
        
        // Features
        const featureTexts = document.querySelectorAll('.feature p');
        lang.features.forEach((text, index) => {
            featureTexts[index].textContent = text;
        });
        
        // Converter Section
        document.querySelector('.file-upload-area p').textContent = lang.fileUpload;
        document.querySelector('.file-select-btn').textContent = lang.fileButton;
        document.querySelector('.file-requirements').textContent = lang.fileRequirements;
        document.querySelector('.option label').textContent = lang.outputLabel;
        
        // Dropdown options
        const formatOptions = document.querySelectorAll('#outputFormat option');
        lang.formatOptions.forEach((text, index) => {
            formatOptions[index].textContent = text;
        });
        
        // Buttons
        document.querySelector('.convert-btn span').textContent = lang.convertBtn;
        document.querySelector('.download-btn span').textContent = lang.downloadBtn;
        
        // Footer - Modified to preserve images
        document.querySelector('.footer-text p').textContent = lang.madeBy;
        
        // Update Discord link while preserving image
        const discordLink = document.querySelector('.discord-link');
        discordLink.innerHTML = `
            <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" 
                 alt="Discord" 
                 class="discord-logo">
            ${lang.joinCommunity}
        `;
        
        // Update WhatsApp link while preserving image
        const whatsappLink = document.querySelector('.whatsapp-link');
        whatsappLink.innerHTML = `
            <img src="images/whatsapp-color-svgrepo-com.svg" 
                 alt="WhatsApp" 
                 class="whatsapp-logo">
            ${lang.contactUs}
        `;
        
        document.querySelector('.copyright p').textContent = lang.copyright;
    }

    // Event listener
    languageToggle.addEventListener('click', toggleLanguage);

    // Add error handlers for images
    document.querySelector('.discord-logo').onerror = function() {
        this.src = 'images/discord-fallback.png';
    };
    document.querySelector('.whatsapp-logo').onerror = function() {
        this.src = 'images/whatsapp-fallback.png';
    };
});

// DOM Elements
const fileInput = document.getElementById('subtitleFile');
const dropZone = document.getElementById('dropZone');
const convertBtn = document.getElementById('convertBtn');
const statusDiv = document.getElementById('status');
const downloadLink = document.getElementById('downloadLink');
const fileInfo = document.getElementById('fileInfo');
const outputFormat = document.getElementById('outputFormat');
const spinner = document.getElementById('spinner');

// File handling
let selectedFile = null;

// Event Listeners
fileInput.addEventListener('change', handleFileSelect);
dropZone.addEventListener('dragover', handleDragOver);
dropZone.addEventListener('dragleave', handleDragLeave);
dropZone.addEventListener('drop', handleDrop);
convertBtn.addEventListener('click', convertFile);

// Functions
function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file) {
        processSelectedFile(file);
    }
}

function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    dropZone.classList.remove('drag-over');
    
    const file = e.dataTransfer.files[0];
    if (file) {
        processSelectedFile(file);
        fileInput.files = e.dataTransfer.files;
    }
}

function processSelectedFile(file) {
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
        showStatus('الملف كبير جدًا. الحد الأقصى للحجم هو 5MB.', 'error');
        return;
    }
    
    // Check file extension
    const validExtensions = ['.srt', '.sub', '.txt'];
    const fileExt = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
    
    if (!validExtensions.includes(fileExt)) {
        showStatus('صيغة الملف غير مدعومة. الرجاء اختيار ملف .srt أو .sub', 'error');
        return;
    }
    
    selectedFile = file;
    convertBtn.disabled = false;
    
    // Update UI to show selected file
    dropZone.innerHTML = `
        <div class="file-selected">
            <span class="file-icon">📄</span>
            <div>
                <p class="file-name">${file.name}</p>
                <p class="file-size">${formatFileSize(file.size)}</p>
            </div>
        </div>
    `;
}

function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' بايت';
    else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' كيلوبايت';
    else return (bytes / (1024 * 1024)).toFixed(1) + ' ميجابايت';
}

function showStatus(message, type) {
    statusDiv.textContent = message;
    statusDiv.className = `status-message ${type}`;
    statusDiv.classList.remove('hidden');
}

function convertFile() {
    if (!selectedFile) {
        showStatus('الرجاء اختيار ملف أولاً', 'error');
        return;
    }
    
    // Show loading spinner
    convertBtn.disabled = true;
    spinner.classList.remove('hidden');
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const arrayBuffer = e.target.result;
            const uint8Array = new Uint8Array(arrayBuffer);
            
            // Convert from Windows-1256 to UTF-8
            const utf8Content = convertWindows1256ToUtf8(uint8Array);
            
            // Create output filename based on selected format
            let outputFilename = selectedFile.name.replace(/\.[^/.]+$/, '') + '_fixed';
            const outputExt = outputFormat.value === 'same' ? 
                selectedFile.name.slice(selectedFile.name.lastIndexOf('.')) : 
                '.' + outputFormat.value;
            outputFilename += outputExt;
            
            // Create a Blob with UTF-8 encoding
            const blob = new Blob([utf8Content], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            
            // Set up download link
            downloadLink.href = url;
            downloadLink.download = outputFilename;
            fileInfo.textContent = outputFilename;
            
            // Show success message and download button
            showStatus('تم تحويل الملف بنجاح! الترجمات يجب أن تظهر بشكل صحيح الآن.', 'success');
            downloadLink.classList.remove('hidden');
            
        } catch (error) {
            console.error('Conversion error:', error);
            showStatus(`حدث خطأ أثناء التحويل: ${error.message}`, 'error');
        } finally {
            // Hide loading spinner
            spinner.classList.add('hidden');
            convertBtn.disabled = false;
        }
    };
    
    reader.onerror = function() {
        showStatus('حدث خطأ أثناء قراءة الملف. الرجاء المحاولة مرة أخرى.', 'error');
        spinner.classList.add('hidden');
        convertBtn.disabled = false;
    };
    
    // Read the file as an ArrayBuffer
    reader.readAsArrayBuffer(selectedFile);
}

function convertWindows1256ToUtf8(buffer) {
    let utf8Str = '';
    for (let i = 0; i < buffer.length; i++) {
        const byte = buffer[i];
        if (byte <= 0x7F) {
            utf8Str += String.fromCharCode(byte);
        } else {
            const utf8Char = windows1256ToUtf8[byte] || byte;
            utf8Str += String.fromCharCode(utf8Char);
        }
    }
    return utf8Str;
}


// Initialize
convertBtn.disabled = true;