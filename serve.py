#!/usr/bin/env python3
"""Tiny static server for previewing the portfolio.

Adds no-cache headers so the browser always fetches the latest file — a plain
reload (Cmd+R) is enough to see edits; no hard-refresh needed.

Usage:  python3 serve.py [port]   (defaults to 8000, serves this folder)
"""
import os
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
ROOT = os.path.dirname(os.path.abspath(__file__))


class NoCacheHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


if __name__ == "__main__":
    print(f"Serving {ROOT} at http://localhost:{PORT}/preview.html (no-cache)")
    HTTPServer(("", PORT), NoCacheHandler).serve_forever()
