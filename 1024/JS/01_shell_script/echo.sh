#!/bin/bash

echo "아무거나 입력하세요:"
read phrase

if [ ${#phrase} -gt 0 ]; then
echo "SYSTEM: $phrase"
else
echo "아무것도 입력을 안하셨네요?"
fi