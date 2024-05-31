
        // Disable Ctrl+U
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'u') {
                e.preventDefault();
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            // Disable right-click context menu
            document.addEventListener('contextmenu', function(event) {
                event.preventDefault();
            });

            // Disable text selection
            document.addEventListener('selectstart', function(event) {
                event.preventDefault();
            });

            // Disable keyboard shortcuts for copying
            document.addEventListener('keydown', function(event) {
                if ((event.ctrlKey || event.metaKey) && event.key === 'c') {
                    event.preventDefault();
                }
                // Disable F12 key
                if (event.key === 'F12') {
                    event.preventDefault();
                }
                // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
                if ((event.ctrlKey || event.metaKey) && event.shiftKey && ['I', 'J', 'C'].includes(event.key)) {
                    event.preventDefault();
                }
                // Disable Ctrl+U
                if ((event.ctrlKey || event.metaKey) && event.key === 'U') {
                    event.preventDefault();
                }
            });

            // Disable image dragging
            document.querySelectorAll('img').forEach(function(img) {
                img.setAttribute('draggable', 'false');
                img.addEventListener('dragstart', function(event) {
                    event.preventDefault();
                });
            });

            // Disable pasting
            document.addEventListener('paste', function(event) {
                event.preventDefault();
            });

        });

        
        